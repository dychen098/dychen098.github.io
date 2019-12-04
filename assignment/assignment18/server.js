
const Joi = require('joi');
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static('public'));

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/teams', {useUnifiedTopology:true, useNewUrlParser:true})
.then(()=> console.log("Connected to mongodb..."))
.catch((err => console.error("could not connect to mongo...", err)));

const teamSchema = new mongoose.Schema({
    name:String,
    homecity:String,
    arena:String,
    cups:Number,
    division:String,
    players:[String]
});

const Team = mongoose.model('Team', teamSchema);

async function createTeam(team){
    const result = await team.save();
    console.log(result);
}

function validateTeam(team){
    const schema = {
        name:Joi.string().min(1).required(),
        homecity:Joi.string().min(1).required(),
        arena:Joi.string().min(1).required(),
        cups:Joi.number(),
        division:Joi.string(),
        players:Joi.allow()
    };

    return Joi.validate(team, schema);
}

app.post('/api/teams', (req,res)=>{
    const result = validateTeam(req.body);

    if(result.error){
        res.status(400).send(result.err.details[0].message);
        return;
    }

    const team = new Team({
        name:req.body.name,
        homecity:req.body.homecity,
        arena:req.body.arena,
        cups:Number(req.body.cups),
        division:req.body.division,
        players:req.body.players
    });

    createTeam(team);
    res.send(team);

});


//render our html page
app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html');
});

async function getTeams(res){
    const teams = await Team.find();
    console.log(teams);
    res.send(teams);
}

app.get('/api/teams',(req,res)=>{
    const teams = getTeams(res);
});

app.get('/api/teams/:id',(req,res)=>{
    let team = getTeam(req.params.id,res)
})

async function getTeam(id,res){
    const team = await Team
    .findOne({_id:id});
    console.log(team);
    res.send(team);
}

app.put('/api/teams/:id',(req,res)=>{

    const result = validateTeam(req.body);

    if(result.error){
        res.status(400).send(result.error.details[0].message);
        return;
    }

    updateTeam(res,req.params.id, req.body.name, req.body.homecity, req.body.arena, req.body.cups, req.body.division, req.body.players);
});

async function updateTeam(res, id, name, homecity, arena, cups, division, players) {
    //fist param: to find, second update
    const result = await Team.updateOne({_id:id},{
        $set:{
            name:name,
            homecity:homecity,
            arena: arena,
            cups: Number(cups),
            division:division,
            players:players
        }
    })
    
    res.send(result);
}

app.delete('/api/teams/:id',(req,res)=>{
    removeTeam(res, req.params.id);
});

async function removeTeam(res, id) {
    //can also use delete many
    //const result = await Course.deleteOne({_id:id});
    const team = await Team.findByIdAndRemove(id);
    res.send(team);
}


const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
});
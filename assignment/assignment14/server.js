const Joi = require('joi');
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static('public'));

const teams = [
    {id:1, name:"Penguins", homecity:"Pittsburgh",division:"Metropolitan", captain:"Sidney Crosby", goalie:"Matt Murray" },
    {id:2, name:"Golden Knights", homecity:"Las Vegas",division:"Pacific", captain:"None", goalie:"Marc-André Fleury" },
    {id:3, name:"Maple leafs", homecity:"Toronto",division:"Atlantic", captain:"John Tavares", goalie:"Frederik Andersen" },
    {id:4, name:"Blackhawks", homecity:"Chicago",division:"Central", captain:"Jonathan Toews", goalie:"Corey Crawford" },
    {id:5, name:"Oilers", homecity:"Edmonton",division:"Pacific", captain:"Connor McDavid", goalie:"Mike Smith" },
    {id:6, name:"Capitals", homecity:"Washington",division:"Metropolitan", captain:"Alexander Ovechkin", goalie:"Braden Holtby" },
    {id:7, name:"Lightning", homecity:"Tampa Bay",division:"Atlantic", captain:"Steven Stamkos", goalie:"Andrei Vasilevskiy" }
]

app.get('/api/teams', (req,res)=>{
    res.send(teams);
});

app.get('/api/teams/:id', (req,res)=>{
    const requestedId = parseInt(req.params.id);
    const team = teams.find(s =>s.id === requestedId);

    if(!team) {
        res.status(404).send(`The team with id ${requestedId} was not found`);
        return;
    }

    res.send(team);
});

//render our html page
app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html');
});

app.post('/api/teams', (req,res)=>{
    const schema = {
        name:Joi.string().min(3).required(),
        homecity:Joi.string().min(3).required(),
        division:Joi.string().min(4).required(),
        captain:Joi.string().required(),
        goalie:Joi.string().required()
    }

    const result = Joi.validate(req.body, schema);

    if(result.error){
        res.status(400).send(result.error.details[0].message);
    }

    const team = {
        id:teams.length + 1,
        name : req.body.name,
        homecity : req.body.homecity,
        division : req.body.division,
        captain : req.body.captain,
        goalie : req.body.goalie
    }
    console.log("name is: " + req.body.name);
    teams.push(team);
    res.send(team);
});

//listen
const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
});
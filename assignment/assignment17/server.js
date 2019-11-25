// const Joi = require('joi');
// const express = require('express');
// const app = express();
// app.use(express.json());
// app.use(express.static('public'));

// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/recipes', {useUnifiedTopology:true, useNewUrlParser:true})
// .then(()=> console.log("Connected to mongodb..."))
// .catch((err => console.error("could not connect ot mongodb...", err)));

// const recipeSchema = new mongoose.Schema({
//     title:String,
//     author:String,
//     rating:Number,
//     ingredients:[String],
//     directions:[String]
// });

// const Recipe = mongoose.model('Recipe', recipeSchema);

// async function createRecipe(recipe){
//     const result = await recipe.save();
//     console.log(result);
// }

// /*
// const chocCookie = new Recipe({
//     title:"Chocolate Chip Cookies",
//     author:"Sam Young",
//     rating:3.4,
//     ingredients:["flour","sugar","butter","milk","eggs","chips"],
//     directions:["mix dry ingredients", "mix wet ingredients", "mix everything", "put on cookie sheet", "bake"]
// });

// createRecipe(chocCookie);
// */

// function validateRecipe(recipe){
//     const schema = {
//         title:Joi.string().min(3).required(),
//         author:Joi.string(),
//         rating:Joi.number(),
//         ingredients:Joi.allow(),
//         directions:Joi.allow()
//     };

//     return Joi.validate(recipe, schema);
// }

// app.post('/api/recipes', (req,res)=>{
//     const result = validateRecipe(req.body);

//     if(result.error){
//         res.status(400).send(result.err.details[0].message);
//         return;
//     }

//     const recipe = new Recipe({
//         title:req.body.title,
//         author:req.body.author,
//         rating:Number(req.body.rating),
//         ingredients:req.body.ingredients,
//         directions:req.body.directions
//     });

//     createRecipe(recipe);
//     res.send(recipe);

// });


// //render our html page
// app.get('/',(req,res)=>{
//     res.sendFile(__dirname + '/index.html');
// });

// async function getRecipes(res){
//     const recipes = await Recipe.find();
//     console.log(recipes);
//     res.send(recipes);
// }

// app.get('/api/recipes',(req,res)=>{
//     const recipes = getRecipes(res);
// });

// app.get('/api/recipes/:id',(req,res)=>{
//     let recipe = getRecipe(req.params.id,res)
// })

// async function getRecipe(id,res){
//     const recipe = await Recipe
//     .findOne({_id:id});
//     console.log(recipe);
//     res.send(recipe);
// }

// app.put('/api/recipes/:id',(req,res)=>{
//     //validate 
//     //if invalid return 400 - bad request
//     const result = validateRecipe(req.body);

//     if(result.error){
//         res.status(400).send(result.error.details[0].message);
//         return;
//     }

//     updateRecipe(res,req.params.id, req.body.title, req.body.author, req.body.rating, req.body.ingredients, req.body.directions );
// });

// async function updateRecipe(res, id, title, author, rating, ingredients, directions) {
//     //fist param: to find, second update
//     const result = await Recipe.updateOne({_id:id},{
//         $set:{
//             title:title,
//             author:author,
//             rating: Number(rating),
//             ingredients: ingredients,
//             directions:directions
//         }
//     })
    
//     res.send(result);
// }

// // app.delete('/api/recipes/:id',(req,res)=>{
// //     removeRecipe(res, req.params.id);
// // });

// // async function removeRecipe(res, id) {
// //     //can also use delete many
// //     //const result = await Course.deleteOne({_id:id});
// //     const recipe = await Recipe.findByIdAndRemove(id);
// //     res.send(recipe);
// // }

// const port = process.env.PORT || 3000;
// app.listen(port, ()=>{
//     console.log(`listening on port ${port}`);
// });
















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

/*
const chocCookie = new Recipe({
    title:"Chocolate Chip Cookies",
    author:"Sam Young",
    rating:3.4,
    ingredients:["flour","sugar","butter","milk","eggs","chips"],
    directions:["mix dry ingredients", "mix wet ingredients", "mix everything", "put on cookie sheet", "bake"]
});

createRecipe(chocCookie);
*/

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
    //validate 
    //if invalid return 400 - bad request
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



const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
});
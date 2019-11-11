const express = require('express');
const app = express();
const teams = require('./teams');
app.use(express.static('public')); //allows us to access jss/css/images if in a public dir



app.get('/', (req,res)=>{
    res.sendFile(__dirname + "/index.html");
});

app.get('/api/teams',(req,res)=>{
    res.send(teams);
});

const port = process.env.PORT || 3000;

app.listen(port,()=>{

    console.log(`listening on port ${port}`);

});
const express = require('express');
const cors = require('cors');
const app = express();

const PORT = 3000;
let task;
let data =[];
app.use(cors());

app.use(express.json());
app.post('/addtask', (req, res)=>{
    task =req.body;
    console.log(JSON.stringify(task));
    data.push(task);
    res.send(JSON.stringify(data));

})
app.get('/getTask', (req,res)=>{ 
    res.send(data);
})
app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and  App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);
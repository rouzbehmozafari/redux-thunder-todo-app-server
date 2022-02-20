const express = require('express')
const cors = require('cors')
const dotenv = require("dotenv").config()

const {getAllTasks} = require('./db_access/getTasks.js')
const {insertNewTask} = require('./db_access/addNewTask')
const {removeTask} = require('./db_access/removeTask')
const app = express()
app.use(express.json())
app.use(cors())
app.use((req,res,next)=>{
    console.log(req.url)
    // res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
    // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next()
})
app.get('/todos',(req,res)=>{
    getAllTasks().then((result)=>{res.send(result)})
})
app.post('/addNewTask',(req,res)=>{
    const newTask = req.body
    insertNewTask(newTask).then(message => {
        if(message.acknowledged){
            res.send('added to db')
        } 
        else {
            res.send('error adding to db')
        }
    })
})
app.post('/removeTask',(req,res)=>{
    console.log(req.body)
    const taskId = req.body.idToRemove
    removeTask(taskId).then(message => {
        console.log(message)
        // if(message.acknowledged){
            res.send('removed from db')
        // } 
        // else {
        //     res.send('error removing from db')
        // }
    })
})

const PORT = process.env.PORT || 1818
app.listen(PORT, () => console.log("listening on port", PORT));

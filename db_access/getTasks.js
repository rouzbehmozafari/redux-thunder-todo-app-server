const {_getDb} = require('./getDb')

async function getAllTasks(){ 
    const db = await _getDb()
    const userArray = await db.collection("todos")
    .find().toArray()
    return userArray
}

module.exports = { getAllTasks }
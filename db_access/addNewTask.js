const {_getDb} = require('./getDb')

const insertNewTask = async(objectNewTask)=>{
    const db = await _getDb()
    return db.collection('todos').insertOne(objectNewTask)
}

module.exports = {insertNewTask}
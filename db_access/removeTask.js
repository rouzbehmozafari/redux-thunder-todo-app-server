const {_getDb} = require('./getDb')
const {ObjectID, ObjectId} = require('mongodb')

async function removeTask(id){
    const db = await _getDb()
    // const toId =  ObjectId(id)
    console.log(id)
    return db.collection('todos').deleteOne( {"_id": ObjectId(id)})
}

module.exports = {removeTask}
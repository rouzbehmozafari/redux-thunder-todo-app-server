const { MongoClient } = require("mongodb")
const dotenv = require("dotenv").config()


let _db;

async function _getDb() {  
    if(_db) {
        return _db;
    } else {
        const url = process.env.DB_URL;
        const client = new MongoClient(url)

        const connected_client = await client.connect()
        _db = connected_client.db('todo_app');
    
        return _db
    }
}

module.exports = { _getDb }
const express = require('express')
const cors = require('cors')
const dotenv = require("dotenv").config()

const app = express()
app.use(cors())


const PORT = 1818
app.listen(PORT, () => console.log("listening on port", PORT));

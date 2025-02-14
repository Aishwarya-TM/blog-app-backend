require('dotenv').config()
const express = require('express')
const app = express()
const PORT = 3500

const cors = require('cors')
const mongoose = require('mongoose')
const blogRouter = require('./routes/blogRouter')

app.use(cors())
app.use(express.json())

app.get('/', (request, response)=>
{
    response.status(200).send({message : "Server is running successfully!"})
})

mongoose.connect(process.env.DB_URL)
const db = mongoose.connection
db.on('error', (errorMessage) => console.log(errorMessage))
db.once('open', () => console.log('Connected to db successfully!'))

app.use('/api/v1/blog', blogRouter)

app.listen(PORT,
    console.log(`Server started running on http://localhost:${PORT}`))
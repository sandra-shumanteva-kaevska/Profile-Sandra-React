import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

import { Project } from './models/project'

const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost:27017/profile'
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.Promise = Promise

const port = process.env.PORT || 8080
const app = express()

app.use(cors())
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send(`Hello, Welcome to Sandra's Profile`)
})

app.get('/projects', async (req, res) => {
    const projects = await Project.find()
    res.json(projects)
})

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
})
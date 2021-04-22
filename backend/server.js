import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

import { Project } from './models/project'
import projectsData from './data/projectsData.json'

const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost:27017/portfolio'
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.Promise = Promise

const port = process.env.PORT || 8080
const app = express()

app.use(cors())
app.use(express.static('public'))

if (process.env.RESET_DATABASE === 'true') {
    const populateDatabase = async () => {
        await Project.deleteMany()

        projectsData.forEach(item => {
            const newProject = new Project(item)
            newProject.save()
        })
    }
    populateDatabase()
}

app.get('/', (req, res) => {
    res.send(`Hello, Welcome to Sandra's Portfolio Data`)
})

app.get('/projects', async (req, res) => {
    const projects = await Project.find().sort({ number: 'desc' })
    res.json(projects)
})

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
})
import mongoose from 'mongoose'

export const Project = new mongoose.model('Project', {
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    tech: [{
        type: String,
        required: true
    }],
    image: String,
    year: {
        type: Number,
        required: true
    },
    github: {
        type: String,
        required: true
    },
    preview: {
        backend: String,
        frontend: String
    }
})


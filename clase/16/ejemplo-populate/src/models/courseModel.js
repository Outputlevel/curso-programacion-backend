import mongoose from 'mongoose';

const courseCollection = 'courses';

const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    difficulty: {
        type: Number,
        default: 1
    },
    topics: {
        type: Array,
        default: []
    },
    professor: String,
    students: {
        type: Array,
        default: []
    }
});

export const courseModel = mongoose.model(courseCollection, courseSchema);
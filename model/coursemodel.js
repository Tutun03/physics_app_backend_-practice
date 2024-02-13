const mongoose = require('mongoose');
const User=require('../model/Usermodel')
const assessmentSchema = new mongoose.Schema({
    questionId: {
        type: String,
        required: true
    },
    question_number: {
        type: Number,
        required: true
    },
    marks_of_each_question: {
        type: Number,
        required: true
    },
    marks_obtained_in_each_question: {
        type: Number,
        required: true
    }
});

const contentSchema = new mongoose.Schema({
    video_id: {
        type: String,
        required: true
    },
    video_link: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }
});

const moduleSchema = new mongoose.Schema({
    cm_number: {
        type: Number,
        required: true
    },
    content: [contentSchema],
    assessment: [assessmentSchema],
    status: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    completion: {
        type: Boolean,
        required: true
    },
    start: {
        type: Date,
        required: true
    },
    total_marks: {
        type: Number,
        required: true
    },
    marks_obtained: {
        type: Number,
        required: true
    }
});

const courseSchema = new mongoose.Schema({
    c_name: {
        type: String,
        required: true
    },
    c_id: {
        type: String,
        required: true
    },
    modules: [moduleSchema]
});

const Course= mongoose.model('Course', courseSchema);
module.exports = {Course};

const { ObjectId } = require("mongodb");
const { Date } = require("mongoose");
const mongoose = require("mongoose");
const ApplicationFormSchema = mongoose.Schema(
    {
        _id: {
            type: ObjectId,
        },
        bpm_name: {
            type: String,
            required: [true, "Please add the bpm_name"],
        },
        company: {
            type: String,
            required: [true, "Please add the company name "],
        },
        description: {
            type: String,
        },
        date: {
            type: Date, default: Date.now(),
        },
        status: {
            type: Number,default:0
        },
        user_id: {
            type: Number,
        },
        create_time: {
            type: Date, default: Date.now(),
        },
        update_time: {
            type: Date,
        },
        deleted: {
            type: Number,default:0
        }
    });

module.exports = mongoose.model("a_ApplicationForm", ApplicationFormSchema, "a_ApplicationForm");


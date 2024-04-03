const { Date } = require("mongoose");
const mongoose = require("mongoose");
const { ObjectId } = require("mongodb");
const ApplicationDetailSchema = mongoose.Schema(
    {
        
        id: {
            type: Number,
        },
        code: {
            type: String,
        },
        brand: {
            type: String,
        },
        model: {
            type: String,
        },
        price: {
            type: String,
        },
        count: {
            type: Number,
        },
        parm: {
            CPU: String,
            RAM: String,
            DISK: String,
            SCREEN: String,
        },
        applicationForm_Id: {
            type: ObjectId,
            ref: 'a_ApplicationForm'
        }
    });


module.exports = mongoose.model("a_ApplicationDetails", ApplicationDetailSchema, "a_ApplicationDetails");

const { Date } = require("mongoose");
const mongoose = require("mongoose");
const { ObjectId } = require("mongodb");
const personSchema = mongoose.Schema(
  {
    _id: {
      type: ObjectId,
    },
    userid: {
      type: String,
    },
    usename: {
      type: String,
    },
    phoneNum: {
      type: String,
    },
    age: {
      type: Number,
    },
    xb: {
      type: String,
    }
  });



// if you do not use the third argument
// - mongoose will automatically convert 1 argument to "product" 
// and will use this name as the collection name. 
module.exports = mongoose.model("a_person", personSchema, "a_person");

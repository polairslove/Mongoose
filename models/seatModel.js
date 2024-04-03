const { Date } = require("mongoose");
const mongoose = require("mongoose");
const { ObjectId } = require("mongodb");
const seatSchema = mongoose.Schema(
  {
      id: {
      type: Number,
    },
    hall_name: {
      type: String,
    },
    s_numb: {
      type: Number,
    },
    type: {
      type: String,
    },
    status: {
      type: String,
    }

  }
);
//字符与自己数据库中的一致

module.exports = mongoose.model("a_seat", seatSchema, "a_seat");

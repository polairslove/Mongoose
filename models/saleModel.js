const { Date } = require("mongoose");
const mongoose = require("mongoose");
const { ObjectId } = require("mongodb");
const saleSchema = mongoose.Schema(
  {
    _id: {
      type: ObjectId,
    },
    sale_id: {
      type: String,
    },
    saledate: {
      type: String,
    },
    ticket: {
      ticket_id: {
        type: ObjectId,
        ref: 'a_ticket'
      },
      quantity: Number,
    },
    price: {
      type: Number,
    },
    person: {
      use_id: {
        type: String
      },
      ticketscode: String
    },

  }
);

module.exports = mongoose.model("a_sale", saleSchema, "a_sale");


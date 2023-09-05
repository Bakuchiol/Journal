const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema(
  // {
  //   name: {
  //     type: String,
  //     required: true
  //   },
  //   // include ? ?
  //   img: {
  //     type: String,
  //     required: true,
  //   },
  //   sortOrder: Number,
  // },
  // {
  //   timestamps: true,
  // }

  {
    title:{
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    timestamps: true
  }
);

module.exports = mongoose.model('Entry', categorySchema);
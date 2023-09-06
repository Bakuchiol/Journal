const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema(
  {
    date: {
      type: Date,
      required: true,
      default: Date.now // date entry is made
    },
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    image :{
      type: String,
    },
    // only user can access own entries
    user_id: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  }
  // {
  //   date: {
  //     type: Date,
  //     required: true,
  //     default: Date.now
  //   },
  //   title:{
  //     type: String,
  //     required: true
  //   },
  //   content: {
  //     type: String,
  //     required: true,
  //   },
  //   user_id: {
  //     type: Schema.Types.ObjectId,
  //     ref: 'User'
  //   }
  // },{
  //   collection: 'entries',
  //   timestamps: true
  // }
);

module.exports = mongoose.model('Entry', categorySchema);
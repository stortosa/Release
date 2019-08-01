const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recSchema = new Schema({
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  title: String,
  recorded:[String],
  audioType: String,
  status: String,
  audioSrc: [],
  timeslice: Number,
},
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  });

const Demo = mongoose.model('Demo', recSchema);
module.exports = Demo;
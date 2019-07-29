const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recSchema = new Schema({
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  title: String,
  ListRecorded:[String],
},
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  });

const Record = mongoose.model('Record', recSchema);
module.exports = Record;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recSchema = new Schema({
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  title: String,
  listRecorded:[String],

},
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  });

const Demo = mongoose.model('Demo', recSchema);
module.exports = Demo;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const calmSchema = new Schema({
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  title: String,
  description: String,
},
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  });

const CalmMod = mongoose.model('CalmMod', calmSchema);
module.exports = CalmMod;
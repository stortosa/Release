const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fearSchema = new Schema({
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  title: String,
  description: String,
  Task: [String],       //cosas a mejorar.
  ListRecorded:[String],

},
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  });

const FearMod = mongoose.model('FearMod', fearSchema);
module.exports = FearMod;

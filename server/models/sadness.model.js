const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sadnessSchema = new Schema({
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

const SadnessMod = mongoose.model('SadnessMod', sadnessSchema);
module.exports = SadnessMod;

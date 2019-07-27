const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const calmSchema = new Schema({
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

const CalmMod = mongoose.model('CalmMod', calmSchema);
module.exports = CalmMod;


  // tasks: [{
  //   type: Schema.Type.ObjectId,
  //   ref: 'Task',
  // }],
  // listRecods: [{
  //   type: Schema.Type.ObjectId,
  //   ref: 'ListRecorded',
  // }],
  // listBetter: [{
  //   type: Schema.Type.ObjectId,
  //   ref: 'ListBetter',
  // }]

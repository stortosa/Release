const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const goalSchema = new Schema({
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

const Goal = mongoose.model('Goal', goalSchema);
module.exports = Goal;

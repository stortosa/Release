//modelo para la imagend el sueño
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const happinessSchema = new Schema({
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
picture: {
  imgName: String,
  imgPath: String,
}  

},
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  });

const HappinessMod = mongoose.model('HappinessMod', happinessSchema);
module.exports = HappinessMod;

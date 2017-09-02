import mongoose, { Schema } from 'mongoose';

gameSchema = new Schema({
  id : { type: Number, index: true },
  name : String,
  description : String,
  rating : Number,
  timesPlayed : Number,
  creator : String,
  questions : Array,
  tags : [String],
  ranking : [(String,Number)],
  creationDate : Date,
  image : String	
})

class GameClass {}

gameSchema.loadClass(GameClass);

export default mongoose.model('Game', gameSchema);
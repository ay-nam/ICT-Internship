const mongoose=require('mongoose');
const movieSchema=mongoose.Schema({
    name:String,
    director:String,
    category:String,
    releaseYear:Number
})
const MovieData=mongoose.model('movie',movieSchema);
module.exports=MovieData
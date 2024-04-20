var mongoose  = require('mongoose');
var  Schema = mongoose.Schema;

var userSchema = new Schema({
    name:{
        type:String,
        Required:true
    },
    email:{
        type:String,
        Required:true
    },
    message:{
        type:String,
        Required:true
    }
});
module.exports=mongoose.model('contacts',userSchema);
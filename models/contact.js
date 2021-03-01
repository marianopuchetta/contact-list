const mongoose = require("mongoose");

let Schema = mongoose.Schema;

let contactSchema = new Schema({
  first_name: {
    type: String,
    required: true
  }, 
  last_name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }, 
  contact_number: {
    type: String,
    required: true
  }
});
const crud = (module.exports = mongoose.model("crud", contactSchema));

contactSchema.methods.toJSON = function(){
    let user = this;
    let userObject = user.toObject();
    
    return userObject;
}

module.exports = mongoose.model('Contact', contactSchema);

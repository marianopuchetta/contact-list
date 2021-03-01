const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');


let validRoles = {
    values: ['ADMIN_ROLE', 'USER_ROLE'],
    message: '{VALUE} not valid'
}

let Schema = mongoose.Schema;


let userSchema = new Schema({ 
    username: {
        type: String,
        required:[true, 'the name is necessary']
    },
    email: {
         type: String,
         unique: true,
         required:[true, 'the email is necessary']
    },
    password: {
        type: String,
        required: [true, 'the password is necessary'],
    },
    role: { 
        type: String, 
        default: 'USER_ROLE',
        required: true, 
        enum: validRoles
     },
    status: { 
        type: Boolean, 
        default: false
    }
});

userSchema.methods.toJSON = function() {
    let user = this;
    let userObject = user.toObject();
    delete userObject.password;

    return userObject;
}

userSchema.plugin(uniqueValidator, {
    message: '{PATH} must be unique'
});

module.exports = mongoose.model('User', userSchema);
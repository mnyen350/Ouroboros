const { model, Schema } = require('mongoose');

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    hashedPassword: { type: String, required: true },
    salt: {type:String, required: true},
    created: {type: Date, required: true },
    updated: {type: Date, required: true },
    role : {
        type: String,
        default: 'user',
        enum: ['user', 'admin']
    }
});

const User = model('users', userSchema);
module.exports = User;
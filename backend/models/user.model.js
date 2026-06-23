const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const userSchema = new mongoose.Schema({
    fullname:{
        firstname: {
            type: String,
            required:true,
            minlength:[3, 'First name must be at least 3 characters long'],
        },
        lastname: {
            type: String,
            minlength:[3, 'Last name must be at least 3 characters long'],
        }
    },
        email:{
            type: String,
            unique: true,
            required: true,
            minlength:[5, 'Email must be at least 3 characters long'],
        },
            phone: {
                type: String,
                required: true,
                unique: true,
                minlength:[10, 'Phone number must be at least 10 characters long'],
            },
        password: {
            type: String,
            required: true,
            select: false,
        },
        role: {
            type: String,
            enum: ['customer', 'supplier','delivery', 'admin'],
            default: 'customer',
        },
        location: {
            latitude: { type: Number, required: true },
            longitude: { type: Number, required: true },
        },
        socketId: {
            type: String,
        }
},{
    timestamps: true,
});


userSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET)
    return token;
}

userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

userSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
}

module.exports = mongoose.model('User', userSchema);
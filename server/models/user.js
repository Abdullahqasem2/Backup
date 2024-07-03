const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
//
// const Schema = mongoose.Schema;
const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Username should be added"]    
        },
    picture:{
        type: String
    },
    email:{
      type: String
    },
    phone:{
        type: Number,
        required: [true, "phone number should be added"]
    },
    location:{
        type: "Point",
        coordinates: [ latitude,longitude ],
        required: [true, "Please add your location"]
    },
    password:{
        type: String,
        required: [true, "Please add password"],
        minlength: [8, "Password must be at least 8 characters"]
    },
    trips:[{
        type: mongoose.Schema.Types.ObjectId, ref: 'Trip'
    }],
}, {timestamps: true});


UserSchema.virtual('confirmPassword')
.get( () => this._confirmPassword )
.set( value => this._confirmPassword = value );

UserSchema.pre('save', function(next) {
    bcrypt.hash(this.password, 10)
    .then(hash => {
        this.password = hash;
        next();
    });
});

UserSchema.pre('validate', function(next) {
  console.log(this.password + " --------------- " + this.confirmPassword)
    if (this.password !== this.confirmPassword) {
        this.invalidate('confirmPassword', 'Password must match confirm password');
    }
    next();
});
module.exports.User = mongoose.model('User',UserSchema);
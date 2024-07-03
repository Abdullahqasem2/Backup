const mongoose = require('mongoose');
Schema = mongoose.Schema;
const TripSchema = new mongoose.Schema({
    location:{
        type: String,
    },
    description:{
        type: String,
    },
    startDate:{
        type: Date,
    },
    endDate:{
        type: Date,
    },
    users:[{
        type: Schema.Types.ObjectId, ref: 'User'
    }],
}, {timestamps: true});

module.exports.Trip = mongoose.model('Trip',TripSchema);
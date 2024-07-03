const {User} = require('../models/user.model')
const {Trip} = require('../models/trip.model')
const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');
require("dotenv").config();
const { authenticate } = require('../config/jwt.config');

module.exports.Register = (request, res) => {
  console.log(request.body);
    User.create(request.body)
        .then(user => {
          console.log(user);
            const userToken = jwt.sign({
                id: user._id
            }, process.env.FIRST_SECRET_KEY)
            res
                .cookie("usertoken", userToken, {
                    httpOnly: true
                })
                .json({ msg: "success!", user: user, token: userToken });
        })
        .catch(err => {
          console.log(err)
          res.status(400).json(err)
        });
}

module.exports.findAllUsers = (req, res) => {
    User.find()
        .then(allUsers => res.json(allUsers))
        .catch(err => res.json(err))
}

module.exports.findOneSingleUser = (req, res) => {
    User.findOne({ _id: req.params.id })
        .then(oneSingleUser => res.json(oneSingleUser))
        .catch(err => res.json(err))
}


module.exports.login = async (req, res) => {
    console.log(req.body.email)
    const user = await User.findOne({ email: req.body.email })
    // .then(res => console.log(user))
    // console.log(user+"asdfghjkl;'")
    .catch(err => console.log("asd"+err));
    if (user === null) {
      console.log("user");
        return res.sendStatus(400);
    }
    const correctPassword = await bcrypt.compare(req.body.password, user.password);
    if (!correctPassword) {
      console.log("asd")
        return res.sendStatus(400);
    }

    const userToken = jwt.sign({
                id: user._id
            }, process.env.SECOND_SECRET_KEY)
            res
                .cookie("usertoken", userToken, {
                    httpOnly: true
                })
                .json({ msg: "success!", user: user, token: userToken });
}

module.exports.logout =  (req, res) => {
    res.clearCookie('usertoken');
    res.clearCookie('user');
    res.sendStatus(200);
}

module.exports.updateExistingUser = (req, res) => {
    User.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedUser => res.json(updatedUser))
        .catch(err => res.status(400).json(err));
}

module.exports.deleteAnExistingUser = (req, res) => {
    User.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.joinTrip = async (req, res) =>{
    try{
    let trip = await Trip.findOne({_id:req.params.idt})
    let user = await User.findOneAndUpdate({_id: req.params.idu},{
                 $push:{trips: trip}
            })
    let joinedTrip = await Trip.findOneAndUpdate({_id:req.params.idt},{
                $push:{users: user}
            })
            return res.json(user)
        }
        catch (err){
            console.log("catch")
            return res.status(400).json(err)
        };
}

module.exports.unjoinTrip = async (req, res) =>{
    try{
    let trip = await Trip.findOne({_id:req.params.idt})
    let user = await User.findOneAndUpdate({_id: req.params.idu},{
                 $pull:{trips: trip._id}
            },{ new: true})
    let joinedTrip = await Trip.findOneAndUpdate({_id:req.params.idt},{
                $pull:{users: user._id}
            },{ new: true})
            return res.json(user)
        }
        catch (err){
            console.log("catch")
            return res.status(400).json(err)
        };
}
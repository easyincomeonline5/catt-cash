const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dbConnections = require('../dbConnections')
var catCashDbConnection = dbConnections.getCatCashDbConnection();

// var userDbConnection = mongoose.createConnection(userDbConnectUrl, config, function(error, result){
//     if (error) {
//         console.log(error)
//     }else{
//         console.log("Connected with User Db!")
//     }
// });


const data = {
    email: {type: String, required: true},
    image_url: {type: String, required: true},
    name: {type: String, required: true},
    phone_number: {type: String, required: true},
    package: {type: String, required: true},
    point: {type: int, required: true},
}
const auth = {
    phone_number: {type: String, required: true},
    password: {type: String, required: true}
}

const userSchema = new Schema({
    _id:{type: String, required: true},
    data: {type: data, required: true},
    auth: {type: auth, required: true}
},
{timestamps: true});

const User = catCashDbConnection.model('User', userSchema, "user" );
module.exports = User;


const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dbConnections = require('../dbConnections')
var catCashDbConnection = dbConnections.getCatCashDbConnection();

const regular_user = {
    spin: {type: int, required: true},
    ads: {type: int, required: true},
    quiz: {type: int, required: true}
}
const standard_user = {
    spin: {type: int, required: true},
    ads: {type: int, required: true},
    quiz: {type: int, required: true}
}
const premium_user = {
    spin: {type: int, required: true},
    ads: {type: int, required: true},
    quiz: {type: int, required: true}
}

const data = {
    regular_user: {type: regular_user, required: true},
    standard_user: {type: standard_user, required: true},
    premium_user: {type: premium_user, required: true}
}

const constantSchema = new Schema({
    _id:{type: String, required: true},
    data: {type: data, required: true}
},
{timestamps: true});

const Constant = catCashDbConnection.model('Constant', constantSchema, "constant");
module.exports = Constant;
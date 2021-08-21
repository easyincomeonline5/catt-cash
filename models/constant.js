const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dbConnections = require('../dbConnections')
var catCashDbConnection = dbConnections.getCattCashDbConnection();

const regular_user = {
    spin: {type: Number, required: true},
    ads: {type: Number, required: true},
    quiz: {type: Number, required: true}
}
const standard_user = {
    spin: {type: Number, required: true},
    ads: {type: Number, required: true},
    quiz: {type: Number, required: true}
}
const premium_user = {
    spin: {type: Number, required: true},
    ads: {type: Number, required: true},
    quiz: {type: Number, required: true}
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
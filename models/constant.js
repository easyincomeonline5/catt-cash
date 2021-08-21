const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dbConnections = require('../dbConnections')
var catCashDbConnection = dbConnections.getCattCashDbConnection();

const regular = {
    spin: {type: Number, required: true},
    ads: {type: Number, required: true},
    quiz: {type: Number, required: true}
}
const standard = {
    spin: {type: Number, required: true},
    ads: {type: Number, required: true},
    quiz: {type: Number, required: true}
}
const premium = {
    spin: {type: Number, required: true},
    ads: {type: Number, required: true},
    quiz: {type: Number, required: true}
}

const data = {
    regular: {type: regular, required: true},
    standard: {type: standard, required: true},
    premium: {type: premium, required: true},
    rate: {type: Number, required: true}
}

const constantSchema = new Schema({
    _id:{type: String, required: true},
    data: {type: data, required: true}
},
{timestamps: true});

const Constant = catCashDbConnection.model('Constant', constantSchema, "constant");
module.exports = Constant;
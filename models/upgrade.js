const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dbConnections = require('../dbConnections')
var cattCashDbConnection = dbConnections.getCattCashDbConnection();

const item = {
    _id: {type: String, required: true},//item unique indication id
    number: {type: String, required: true},
    method: {type: String, required: true},
    transection: {type: String, required: true},
    amount: {type: Number, required: true},
    package: {type: String, required: true},
    date: {type: String, required: true}
}
const data = [item]
//const data = [{type: item, required: true}]// not tested

const upgradeSchema = new Schema({
    _id:{type: String, required: true},//userId
    data: {type: data, required: true}
},
{timestamps: true});

const Upgrade = cattCashDbConnection.model('Upgrade', upgradeSchema, "upgrade");
module.exports = Upgrade;
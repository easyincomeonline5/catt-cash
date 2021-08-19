const mongoose = require('mongoose');
const config = {useNewUrlParser: true, useUnifiedTopology: true };
const catCashDbConnectUrl = "mongodb+srv://hellomethealth:hellomethealth@cluster0.vrnxz.mongodb.net/hellomet?retryWrites=true&w=majority";

module.exports = {
    getCatCashDbConnection(){
        return mongoose.createConnection(catCashDbConnectUrl, config, function(error, result){
            if (error) {
                console.log(error)
            }else{
                console.log("Connected with CatCash Db!")
            }
        });
    }
}
const Constant = require('../models/constant');

module.exports = {
    addConstant(req, res){
    //var cData = req.body.data;

        const regular = {
            spin: 5,
            ads: 10,
            quiz: 10
        }
        const standard = {
            spin: 10,
            ads: 20,
            quiz: 20
        }
        const premium = {
            spin: 20,
            ads: 40,
            quiz:40
        }

        const constant = new Constant({
            _id: "Constant",
            data: {
                regular,
                standard,
                premium,
                rate: 5
            }
        });

        constant.save().then((result)=>{
            console.log("Uploading Constant to MongoDB has successful.");
            console.log(result);
            res.json(result);
            res.end();
        }).catch((error)=>{
            console.log("Uploading Constant to MongoDB has Failed: error: " + error);
            res.json({ message: "Constant add Failed" });
            res.end();
        })
  }
}

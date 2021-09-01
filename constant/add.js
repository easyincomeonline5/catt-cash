const Constant = require('../models/constant');

module.exports = {
    addConstant(req, res){
    var cData = req.body.data;

        const regular = {
            spin: cData.regular.spin,
            ads: cData.regular.ads,
            quiz: cData.regular.quiz,
            rate: cData.regular.rate
        }
        const standard = {
            spin: cData.standard.spin,
            ads: cData.standard.ads,
            quiz: cData.standard.quiz,
            rate: cData.standard.rate
        }
        const premium = {
            spin: cData.premium.spin,
            ads: cData.premium.ads,
            quiz: cData.premium.quiz,
            rate: cData.premium.rate
        }

        const constant = new Constant({
            _id: "Constant",
            data: {
                regular,
                standard,
                premium
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

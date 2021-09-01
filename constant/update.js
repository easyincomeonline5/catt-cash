const Constant = require('../models/constant')

module.exports = {
     updateConstant(id, req, res){
    let cData = req.body.data;

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

    //console.log(req);
    const constant = new Constant({
        _id: "Constant",
        data: {
            regular,
            standard,
            premium
        }
    });

    const query = { "_id": "Constant" } ;

    Constant.updateOne(query, {$set: constant}, (err, result) => {
        if (err) {
            console.log(err);
            res.end();
        }else{
            console.log(result);
            res.json(result)
            res.end();
        }
      });

  }
}
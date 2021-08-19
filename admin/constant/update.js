const Constant = require('../../models/constant')

module.exports = {
     updateConstant(id, req, res){
    let cData = req.body.data;

    const regular_user = {
            spin: cData.regular_user.spin,
            ads: cData.regular_user.ads,
            quiz: cData.regular_user.quiz
        }
        const standard_user = {
            spin: cData.standard_user.spin,
            ads: cData.standard_user.ads,
            quiz: data.standard_user.quiz
        }
        const premium_user = {
            spin: cData.premium_user.spin,
            ads: cData.premium_user.ads,
            quiz: cData.premium_user.quiz
        }

    //console.log(req);
    const constant = new Constant({
        _id: "Constant",
        data: {
            regular_user,
            standard_user,
            premium_user
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
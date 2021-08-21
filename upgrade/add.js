const Upgrade = require('../models/upgrade');

module.exports = {
    addUpgrade(id){
        const upgrade = new Upgrade({
            _id: id,
            data: []
        });

        upgrade.save().then((result)=>{
            console.log("Uploading Upgrade to MongoDB has successful.");
            console.log(result);
            //res.json(result);
            //res.end();
        }).catch((error)=>{
            console.log("Uploading Upgrade to MongoDB has Failed: error: " + error);
            ///res.json({ message: "Withdraw add Failed" });
            //res.end();
        })
  }
}

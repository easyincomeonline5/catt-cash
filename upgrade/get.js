const Upgrade = require('../models/upgrade')

module.exports = {
     getUpgrade(id, req, res){
        var searchQuery ={}
        
        if (id) {
            searchQuery = {"_id" : id}
            findUpgrade(req, res, searchQuery)
        }else{
            res.json({"message": "invalid  query"});
            res.end();
        }

  }
}

function findUpgrade(req, res, searchQuery){

    Upgrade.findOne(searchQuery, function(error, result){
        if (error) {
            console.log(error);
        }else{
            if (result==null) {
                res.json({"message": "Upgrade not found."});
                res.end();
            }else{
                res.json(result);
                res.end();
            }
        }
    });
}

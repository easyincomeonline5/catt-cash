const Withdraw = require('../models/witdraw')

module.exports = {
     getWithdraw(id, req, res){
         

        var searchQuery ={}
        
        if (id) {
            searchQuery = {"_id" : id}
            findWithdraw(req, res, searchQuery)
        }else{
            res.json({"message": "invalid  query"});
            res.end();
        }

  }
}

function findWithdraw(req, res, searchQuery){

    Withdraw.findOne(searchQuery, function(error, result){
        if (error) {
            console.log(error);
        }else{
            if (result==null) {
                res.json({"message": "Withdraw not found."});
                res.end();
            }else{
                res.json(result);
                res.end();
            }
        }
    });
}

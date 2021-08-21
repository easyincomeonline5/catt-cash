const History = require('../models/history')

module.exports = {
     getHistory(id, req, res){
         

        var searchQuery ={}
        
        if (id) {
            searchQuery = {"_id" : id}
            findHistory(req, res, searchQuery)
        }else{
            res.json({"message": "invalid  query"});
            res.end();
        }

  }
}

function findHistory(req, res, searchQuery){

    History.findOne(searchQuery, function(error, result){
        if (error) {
            console.log(error);
        }else{
            if (result==null) {
                res.json({"message": "History not found."});
                res.end();
            }else{
                res.json(result);
                res.end();
            }
        }
    });
}

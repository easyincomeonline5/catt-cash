const User = require('../models/user')

module.exports = {
     getUser(id, req, res){
         
        const {phone_number} = req.query;

        var searchQuery ={}
        
        if (id) {
            searchQuery = {"_id" : id}
            findUser(req, res, searchQuery)
        }else if (phone_number) {
            searchQuery = {"data.phone_number" : phone_number}
            findUser(req, res, searchQuery);
        }else{
            res.json({"message": "invalid  query"});
            res.end();
        }

  },
  authenticateUser(req, res){
    var query = { 
        "auth.phone_number": req.query.phone_number,
        "auth.password": req.query.password
    }
    findUser(req, res, query);
  }
}

function findUser(req, res, searchQuery){

    User.findOne(searchQuery, function(error, result){
        if (error) {
            console.log(error);
        }else{
            if (result==null) {
                res.json({"message": "User not found."});
                res.end();
            }else{
                res.json(result);
                res.end();
            }
        }
    });
}

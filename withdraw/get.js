const Withdraw = require('../models/witdraw')

module.exports = {
     getWithdraw(id, req, res){
         const {item_id} = req.query;
        var searchQuery ={}
        
        if (id) {
            searchQuery = {"_id" : id}
            findWithdraw(req, res, searchQuery)
        }else{
            res.json({"message": "invalid  query"});
            res.end();
        }

  },
  getTodayWithdraw(id, req, res){
    
    var searchQuery ={}
    if (id) {
        searchQuery = {"_id" : id}
        todayWithdraw(req, res, searchQuery)
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
                const {item_id} = req.query;
                if(item_id){
                for (let index = 0; index < result.data.length; index++) {
                    const element = result.data[index];
                    if (element._id==item_id) {
                        res.json(element);
                        res.end();
                        return
                    }
                }
                res.end();
                }else{
                    res.json(result);
                    res.end();
                }
            }
        }
    });
}

function findTodayWithdraw(req, res, searchQuery){
    const {date} = req.query;

    Withdraw.findOne(searchQuery, function(error, result){
        if (error) {
            console.log(error);
        }else{
            if (result==null) {
                res.json({"message": "Withdraw data not found."});
                res.end();
            }else{
                // const date = new Date();
                // const year = date.getFullYear();
                // const month = date.getMonth()+1;
                // const day = date.getDate();
                // const today_complete_date = day+"/"+month+"/"+year;

                let todayWithdraw = [];
                for (let index = 0; index < result.data.length; index++) {
                    const element = result.data[index];
                    if (element.date == date) {
                        todayWithdraw.push(element);
                    }
                }

                res.json(todayWithdraw);
                res.end();
            }
        }
    });
}
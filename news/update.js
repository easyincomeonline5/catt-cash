const News = require('../models/news')

module.exports = {
    updateNews(id, req, res) {
        const query = { "_id": id };

       const news = new News({
           _id: id,
           data: {
               title: req.body.title,
               description: req.body.description,
               owner: req.body.owner,
               date: req.body.date
           }
       });

       News.updateOne(query, {$set: news}, (err, result) => {
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
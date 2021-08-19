const User = require('../models/user')

module.exports = {
     updateUser(id, req, res){
    let uData = req.body.data;
    let auth = req.body.auth;

    //console.log(req);
    const user = new User({
        _id: id,
        data: {
            name: uData.name,
            email: uData.email,
            image_url: uData.image_url,
            phone_number: uData.phone_number,
            package: uData.package,
            point: uData.point
        },
        auth: {
        phone_number: auth.phone_number,
        password: auth.password
        }
    });

    const query = { "_id": id } ;

    User.updateOne(query, {$set: user}, (err, result) => {
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
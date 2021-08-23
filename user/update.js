const User = require('../models/user')
const GetUser = require('./get');
module.exports = {
    updateUser(id, req, res) {
        updateUser(id, req, res);
    }
}

function updateUser(id, req, res) {

    const searchQuery = { "_id": id }

    if (req.body.data == null && req.body.auth == null) {
        res.json({ message: "Input is not valid. data or auth and their minimum single phoperty needed" })
        res.end();
        return;
    }

    User.findOne(searchQuery, function (error, result) {
        if (error) {
            console.log(error);
        } else {
            if (result == null) {
                res.json({ "message": "User not found." });
                res.end();
                return;
            } else {
                const copyResult = result;
                if (req.body.data) {
                    const { name, email, image_url, point, package } = req.body.data;
                    name ? result.data.name = name : {}
                    email ? result.data.email = email : {}
                    image_url ? result.data.image_url = image_url : {}
                    point ? result.data.point = point : {}
                    package ? result.data.package = package : {}
                }
                if (req.body.auth) {
                    const { phone_number, password } = req.body.auth;
                    phone_number ? result.auth.phone_number = phone_number : {}
                    password ? result.auth.password = password : {}

                }
                // if (copyResult == result) {
                //     res.json({ message: "Input is not valid. data or auth and their minimum single phoperty needed" })
                //     res.end();
                //     return;
                // }

                User.updateOne(searchQuery, { $set: result }, (err, result) => {
                    if (err) {
                        console.log(err);
                        res.end();
                        return;
                    } else {
                        console.log({ message: result.n });
                        if (result.n = 1) {
                            GetUser.getUser(id, req, res);
                        } else {
                            res.json({ message: "User can not update" })
                            res.end();
                        }
                    }
                });
            }
        }
    });
}
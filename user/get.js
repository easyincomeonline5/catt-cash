const User = require('../models/user')

module.exports = {
    getUser(id, req, res) {

        const { phone_number } = req.query;

        var searchQuery = {}

        if (id) {
            searchQuery = { "_id": id }
            findUser(req, res, searchQuery)
        } else if (phone_number) {
            searchQuery = { "data.phone_number": phone_number }
            findUser(req, res, searchQuery);
        } else {
            res.json({ "message": "invalid  query" });
            res.end();
        }

    },
    authenticateUser(req, res) {
        var query = {
            "auth.phone_number": req.query.phone_number,
            "auth.password": req.query.password
        }
        findUser(req, res, query);
    }
}

function findUser(req, res, searchQuery) {

    User.findOne(searchQuery, function (error, result) {
        if (error) {
            console.log(error);
        } else {
            if (result == null) {
                res.json({ "message": "User not found." });
                res.end();
            } else {
                console.log(result.package.issued_at);
                console.log(result.package.expired_at);
                if (result.package.issued_at > result.package.expired_at) {
                    console.log("issued at not less than expired at");
                    const user = {
                        package: {
                            title: "Regular",
                            phone_number: "...",
                            method: "...",
                            transaction: "...",
                            amount: 0,
                            status: "Approved",
                            issued_at: 0,
                            expired_at: Number.MAX_SAFE_INTEGER
                        }
                    }

                    User.updateOne({"_id": result._id}, { $set: user }, (err, result) => {
                        if (err) {
                            console.log(err);
                            res.end();
                            return;
                        } else {
                            console.log({ message: result.n });
                            if (result.n = 1) {
                                findUser(req, res, searchQuery);
                            } else {
                                res.json({ message: "User can not update" })
                                res.end();
                            }
                        }
                    });


                    
                }else{
                    console.log(result);
                    res.json(result);
                    res.end();
                }
            }
        }
    });
}

const Withdraw = require('../models/witdraw')

module.exports = {
    updateWithdraw(id, req, res) {
        const query = { "_id": id };

        let current = new Date();
       let cDate = current.getFullYear() + '-' + (current.getMonth() + 1) + '-' + current.getDate();
       let cTime = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
       let dateTime = cDate + ' ' + cTime;

        const withdraw_item = {
            _id: "W" + Date.now(),
            number: req.body.number,
            method: req.body.method,
            point: req.body.point,
            rate: req.body.rate,
            date: dateTime        
        }

        Withdraw.update(query,
            {
                $push: {
                    data: {
                        $each: [withdraw_item],
                        $position: 0
                    }
                }
            },

            function (error, result) {
                console.log(result);
                res.json(result)
                res.end();

            })
    }
}
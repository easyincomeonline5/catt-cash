const Upgrade = require('../models/upgrade')

module.exports = {
    updateUpgrade(id, req, res) {
        const query = { "_id": id };

        let current = new Date();
       let cDate = current.getFullYear() + '-' + (current.getMonth() + 1) + '-' + current.getDate();
       let cTime = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
       let dateTime = cDate + ' ' + cTime;

        const upgrade_item = {
            _id: "Up" + Date.now(),
            number: req.body.number,
            method: req.body.method,
            transection: req.body.transection,
            amount: req.body.amount,
            package: req.body.package,
            date: dateTime        
        }

        Upgrade.update(query,
            {
                $push: {
                    data: {
                        $each: [upgrade_item],
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
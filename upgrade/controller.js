const express = require("express");
const upgradeRouter = express.Router();
const Update = require('../upgrade/update')
const Add = require('../upgrade/add')
const Get = require('../upgrade/get')

upgradeRouter.post("/add", function (req, res) {
    Add.addUpgrade(id);
});

upgradeRouter.get("/get/:id",(req, res)=>{
    let id = req.params.id;
    Get.getUpgrade(id, req, res);
})

//update
upgradeRouter.patch("/update/:id", function (req, res) {
    let id = req.params.id;
   // console.log(req);
Update.updateUpgrade(id, req, res);
})


module.exports = upgradeRouter;



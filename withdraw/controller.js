const express = require("express");
const withdrawRouter = express.Router();
const Update = require('../withdraw/update')
const Add = require('../withdraw/add')
const Get = require('../withdraw/get')

withdrawRouter.post("/add", function (req, res) {
    Add.addWithdraw(id);
});

withdrawRouter.get("/get/:id",(req, res)=>{
    let id = req.params.id;
    Get.getWithdraw(id, req, res);
})

//update
withdrawRouter.patch("/update/:id", function (req, res) {
    let id = req.params.id;
   // console.log(req);
Update.updateWithdraw(id, req, res);
})


module.exports = withdrawRouter;



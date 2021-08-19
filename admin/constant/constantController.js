const express = require("express");
const constantRouter = express.Router();
const Update = require('../constant/update')
const Add = require('../constant/add')
const Get = require('../constant/get')

constantRouter.post("/", function (req, res) {
    Add.addUser(req, res);
});


constantRouter.get("/",(req, res)=>{
    Get.getUser(req, res);
})

constantRouter.get("/auth",(req, res)=>{
    Get.authenticateUser(req, res);
})

//update
constantRouter.patch("/:id", function (req, res) {
    let id = req.params.id;
   // console.log(req);
Update.updateUser(id, req, res);
})



module.exports = constantRouter;



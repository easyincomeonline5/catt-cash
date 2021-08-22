const express = require("express");
const userRouter = express.Router();
const Update = require('../user/update')
const Delete = require('../user/delete')
const Add = require('../user/add')
const Get = require('../user/get')

userRouter.post("/add", function (req, res) {
    Add.addUser(req, res);
});

userRouter.get("/get",(req, res)=>{
    let id;
    Get.getUser(id, req, res);
})

userRouter.get("/get/:id",(req, res)=>{
    let id = req.params.id;
    Get.getUser(id, req, res);
})

userRouter.get("/auth",(req, res)=>{
    Get.authenticateUser(req, res);
})



//update
userRouter.patch("/update/:id", function (req, res) {
    let id = req.params.id;
   // console.log(req);
Update.updateUser(id, req, res);
})


//delete
userRouter.delete("/delete/:id", function (req, res) {
    let id = req.params.id;
   // console.log(req);
Delete.deleteUser(id, req, res);
})


module.exports = userRouter;



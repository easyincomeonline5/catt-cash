const express = require('express');

const app = express();
const { ifError } = require("assert");
const { json } = require("body-parser");
app.use(express.json());

var storage, path;
path = require('path');
const multer = require("multer");

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
     'Origin, X-Requested-With, Content-Type, Accept, Authorization');
     if (req.method === 'OPTIONS') {
         res.header('Access-Control-Allow-Method', 'GET, PUT, POST, PATCH, DELETE');
         return res.status(200).json({});
     }
     next();
});

storage = multer.diskStorage({
    destination: './Images/',
    filename: function (req, file, cb) {
        return cb(null, "image_" + new Date().getTime() + (path.extname(file.originalname)));
    }
});

var upload = multer({ storage: storage })

// Uploading image to server hadrdisk then reference will insert to MongoDb...
app.post("/uploadImageToGenarateUrl",
    upload.single('uploadImage'),
    function (req, res) {
        console.log(req.file);
       console.log(__dirname + "/Images/" + req.file.filename);
       var ref = { url: "https://api.hellometbd.com/Images/" + req.file.filename }
       res.json(ref);
    }
);


//Get Image
 app.get("/Images/:imageName", (req, res) => {
    file = req.params.imageName;
  res.sendFile(path.join(__dirname, "./Images/"+file));
});

app.get('/get',function(req, res){
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.end("Success");
})

//For Cpanel...
//app.listen(3000);


//For Cloud Hosting...
const PORT = process.env.PORT || 5000;
app.listen(PORT, function(error){
    if(error){
        console.log(error);
    }else{
        console.log('Server is running on port :' + PORT);
    }
});
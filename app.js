var express = require("express");
var bodyParser = require("body-parser");
var mongoClient = require("mongodb").MongoClient;
var objectId = require("mongodb").ObjectID;
 
var app = express();
var jsonParser = bodyParser.json();
var url = "mongodb://localhost:27017/productShops";
 
app.use(express.static(__dirname + "/app"));

app.get("/api/product", function(req, res){     
    mongoClient.connect(url, function(err, db){
        db.collection("product").find({}).toArray(function(err, product){
            res.send(product)
            db.close();
        });
    });
});

app.get("/api/product/:id", function(req, res){    
    var id = new objectId(req.params.id);
    mongoClient.connect(url, function(err, db){
        db.collection("product").findOne({_id: id}, function(err, products){           
            if(err)
		return res.status(400).send();
            res.send(products);
            db.close();
        });
    });
});

app.put("/api/product", jsonParser, function(req, res){    
    if(!req.body) return res.sendStatus(400);
    var id = new objectId(req.body.id);
    var productName = req.body.name_product;
    var productRes = req.body.res;
    var productDay = req.body.day;
    var productInfo = req.body.info;	     

    mongoClient.connect(url, function(err, db){
        db.collection("product").findOneAndUpdate({_id: id}, { $set: {  day: productDay,res: productRes, name_product: productName, info: productInfo}},{returnOriginal: false },function(err, result){       
            if(err) 
		return res.status(400).send();
            var user = result.value;
            res.send(user);
            db.close();
        });
    });
});
 
app.post("/api/product", jsonParser, function (req, res) {  
    if(!req.body)
	 return res.sendStatus(400);
    var productName = req.body.name_product;
    var productRes = req.body.res;
    var productDay = req.body.day;
    var productInfo = req.body.info;
    var user = {name_product: productName, res: productRes, day: productDay, info: productInfo};     
    mongoClient.connect(url, function(err, db){
        db.collection("product").insertOne(user, function(err, result){
            if(err)
		return res.status(400).send(); 
            res.send(user);
            db.close();
        });
    });
});
  
app.delete("/api/product/:id", function(req, res){
    var id = new objectId(req.params.id);
    mongoClient.connect(url, function(err, db){
        db.collection("product").findOneAndDelete({_id: id}, function(err, result){
            if(err)
		return res.status(400).send();
            var user = result.value;
            res.send(user);
            db.close();
        });
    });
});
  
app.listen(3000, function(){
    console.log("Server running!!!");
});

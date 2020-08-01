var db;
var port = 7777;
var mongodb = require("mongodb");
var mongoclient = mongodb.MongoClient;
var mongourl = "mongodb://localhost:25014";
var express =  require('express');
var expobject  = express();



expobject.get("/:cityname",(req,restaurant) => {
    db.collection("restaurant").find({city_name:req.params.cityname}).toArray((err,data) => {
        if(err) throw err;
        restaurant.send(data);
    })
})


mongoclient.connect(mongourl,(err,client) => {
    if(err) throw err;
    db =   client.db("edurekainternship");
    expobject.listen(port,(err) => {
        if(err) throw err;
        console.log(`Server running on port ${port}`);
    })

})
 

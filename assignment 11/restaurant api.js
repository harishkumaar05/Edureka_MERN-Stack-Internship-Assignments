let db;
const port = 8900;
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const mongoUrl = "mongodb://localhost:24057"
const express = require('express');
const app = express();
var cons = require('cons');
app.use(cons());


// restaurant home
app.get('/restauranthome',(req,res) => {
    var q= {}
    if(req.q.city && req.q.mealtype){
        q={city:req.q.city,"type.mealtype": req.q.mealtype}
    }
    else if(req.q.city){
        q= {city:req.q.city} 
    }else if(req.q.mealtype){
        q={"type.mealtype": req.q.mealtype}
    }
    
    db.collection('restaurant').find(q).toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
})

app.get('/restaurantdetails/:id',(req,res) => {
    console.log(req.params.id)
    var q = {_id:req.params.id}
    db.collection('restaurant').find(q).toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
})

//cuisine
app.get('/cuisine',(req,res) => {
    db.collection('cuisine').find({}).toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
})


//location list
app.get('/location',(req,res) => {
    db.collection('city').find({}).toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
})

//Meal Type
app.get('/mealtype',(req,res) => {
    db.collection('mealtype').find({}).toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
})

MongoClient.connect(mongoUrl,(err,client) => {
    if(err) console.log(err)
    db= client.db('practice');
    app.listen(port,(err) => {
        if(err) throw err;
        console.log(`Server is running on port ${port}`)
    })
})
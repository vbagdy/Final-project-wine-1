/*var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

// Connection URL
var url = 'mongodb://essec:cergyisc00l@138.68.110.210.27017/admin?readPreference=primary';

// Use connect method to connect to the Server
MongoClient.connect(url, function(err, db) {
 // assert.equal(null, err);
  console.log("Connected mongodb",err);
  //insertDocuments(db, function() {
   // db.close();
  });
app.post('/action_page', function(req,res,next){
    var item ={
        email: req.body.email,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        address: req.body.address,
        choice: req.body.choice,
        quantity: req.body.quantity,
    };
  
    mongo.connect(url,function(err,db){
        assert.equal(null,err);
        db.collection('order-form').insertOne(item,function(err,result){
            assert.equal(null.err);
            console.log('Item Inserted');
            db.close();
         });
    });
    res.redirect('/');
}); */
var express = require('express');
var exphbs  = require('express-handlebars');

var app = express();

app.use(express.static('files'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('home', {userName:"Vanessa"});
});


app.get("/fetchdemo/:nbreview", function(req,res){
    res.send({msg:"I got your " + req.params.nbreview});
});

app.get('/about', function(req,res){
    res.render('about',{userName:"Vanessa"});
});

app.get('/shop', function(req,res){
    res.render('shop',{userName:"Vanessa"});
});

app.get('/contact', function(req,res){
    res.render('contact',{userName:"Vanessa"});
}); 
app.get('/people', function(req,res){
    res.render('people',{userName:"Vanessa"});
}); 

app.get("/order",function(req,res){
    res.render('order',{userName:"Vanessa"});
});

app.listen(3025);

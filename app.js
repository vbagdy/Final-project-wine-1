
router.post('/insert', function(req,res,next){
    var item ={
        email:req.body.email,
        lastname: req.body.lastname,
        firstname: req.body.firstname,
        address: req.body.firstname,
        choice: req.body.firstname,
        quantity: req.body.firstname,
    };
    mongo.connect(url,function(err,db{
        assert.equal(null,err);
        db.collection('orderform').insertOne(item,function(err,result){
            assert.equal(null.err);
            console.log('Item Inserted');
        })
    })
});

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

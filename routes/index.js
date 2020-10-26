var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/userlist', function(req, res){
  var db = require("../db");
  var Users = db.Mongoose.model('usercolletion', db.UserSchema, 'usercolletion');
  Users.find({}).lean().exec(
    function(e, docs){
      res.json(docs);
      res.end();
    }
  );
});

router.get('/newuser', function(req,res){
  res.render('newuser',{title:'Add New User'})
});

router.post('/adduser',function(req,res){
  var db = require("../db");
  var Users = db.Mongoose.model('usercolletion', db.UserSchema, 'usercolletion');
  var userName = req.body.username;
  var userEmail = req.body.useremail;
  var user = new Users({username:userName, email:userEmail});
  user.save(function(err){
    if (err){
      console.log("Error! "+ err.message);
      return err;
    }
    else {
      console.log("Post saved");
      res.redirect("userlist");
    }
  })
})

router.get('user/:id', function(req, res, next){
  var db = require("../db");
  var Users = db.Mongoose.model('usercolletion', db.UserSchema, 'usercolletion');
  user.find({ _id: req.params.id}).lean().exec(function(e,docs){
    res.json(docs);
    res.end();
  })
})

module.exports = router;

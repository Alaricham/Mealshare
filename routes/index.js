// Setup

let express = require('express'),
  router = express.Router(),
  passport = require('passport'),
  Meal = require('../models/meals'),
  Commentfeed = require('../models/comments'),
  User = require('../models/users');

// Index route

router.get('/', (req, res) => {
  res.render('landing');
});

// Sign In Routes

router.get('/signin', (req, res) => {
  res.render('signin');
});

router.post('/signin', (req, res) => {
  passport.authenticate('local')(req, res, (err, user) => {
    if (err) {
      console.log(err);
      req.flash('error', err.message);
      res.redirect('/signup');
    }
    if (req.isAuthenticated()) {
      req.flash('success', "Welcome, " + req.user.username + "!");
      res.redirect('/meals');
    } else {
      console.log('User not authenticated');
    }
  });
});

// Register Routes

router.get('/signup', (req, res) => {
  res.render('signup');
});

router.post('/signup', (req, res) => {
  User.register(new User({
    username: req.body.username
  }), req.body.password, (err, user) => {
    if (err) {
      console.log('Error while registering');
      console.log(err);
      req.flash('error', err.message);
      return res.render('signup');
    }
    console.log('User registered');
    passport.authenticate('local')(req, res, (err, user) => {
      if (err) {
        console.log(err);
        req.flash('error', err.message);
        res.redirect('/signup');
      }
      if (req.isAuthenticated()) {
        req.flash('success', "Welcome, " + req.user.username + "!");
        res.redirect('/meals');
      } else {
        console.log('User not authenticated');
      }
    });
  });
});

// Log Out Route

router.get('/signout', (req, res) => {
  req.logout();
  req.flash('success', "Sign out successful!");
  res.redirect('/meals');
});

// User routes

router.get('/user/:user_id', (req, res) => {
  User.findById(req.params.user_id, (err, founduser) => {
    if (err) {
      console.log(err);
    } else {
      console.log(founduser);
      Meal.find({
        "creator.username": founduser.username
      }).populate({
        path: 'comments',
        match: {
          'author.username': founduser.username
        }
      }).exec((err, meals) => {
        console.log(meals);
        res.render('bio', {
          user: founduser,
          usermeals: meals
        });
      });
    }
  });
});


module.exports = router;
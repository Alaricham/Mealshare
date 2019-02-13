// App Setup & Tools

const express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose'),
  seedDB = require('./seeds'),
  passport = require('passport'),
  Localstrategy = require('passport-local').Strategy,
  session = require('express-session'),
  mOverride = require('method-override'),
  User = require('./models/users'),
  path = require('path'),
  flash = require('connect-flash');

require('dotenv').config()
const port = process.env.PORT,
  mongo = process.env.MONGO

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json())
app.use(express.static('Assets'));
app.use(express.static('public'));

var mealRoutes = require('./routes/meals'),
  commentRoutes = require('./routes/comments'),
  indexRoutes = require('./routes/index');
app.use(flash());
mongoose.connect(mongo);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/public/views'))
app.use(mOverride('_method'));
app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new Localstrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser())
app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  res.locals.success = req.flash('success');
  res.locals.error = req.flash('error');
  next();
});
seedDB();

// Routes

app.use(indexRoutes);
app.use('/meals', mealRoutes);
app.use('/meals/:id/comment', commentRoutes);

// Port Listen

app.listen(port, () => {
  console.log('Mealshare server running...');
});
let Meal = require('../models/meals'),
  Commentfeed = require('../models/comments');

let middlewareObj = {};

middlewareObj.isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  } else {
    req.flash('error', 'You need to sign in to proceed');
    res.redirect('/signin');
  }
};

middlewareObj.mealOwner = (req, res, next) => {
  Meal.findById(req.params.id, (err, meal) => {
    if (err) {
      console.log(err);
    } else {
      console.log(meal);
      if (meal.creator.id.equals(req.user._id)) {
        next();
      }
    }
  });
};

middlewareObj.commentOwner = (req, res, next) => {
  Commentfeed.findById(req.params.comment_id, (err, comment) => {
    if (err) {
      console.log(err);
    } else {
      console.log(comment);
      if (comment.author.id.equals(req.user._id)) {
        next();
      }
    }
  });
};

module.exports = middlewareObj;

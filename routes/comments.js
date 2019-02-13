// Setup

let express = require('express'),
  router = express.Router({ mergeParams: true }),
  Meal = require('../models/meals'),
  Commentfeed = require('../models/comments'),
  middleware = require('../middleware');

// Routes

router.get('/new', middleware.isLoggedIn, (req, res) => {
  Meal.findById(req.params.id, (err, foundmeal) => {
    if (err) {
      console.log(err);
    } else {
      console.log(foundmeal);
      res.render('newcomment', { meal: foundmeal });
    }
  });
});

router.post('/new', (req, res) => {
  Meal.findById(req.params.id, (err, foundmeal) => {
    if (err) {
      console.log(err);
    } else {
      console.log(foundmeal);
      Commentfeed.create({ text: req.body.description }, (err, comment) => {
        if (err) {
          console.log(err);
        } else {
          comment.author.id = req.user._id;
          comment.author.username = req.user.username;
          comment.save();
          console.log(comment);
          console.log('Comment created');
          foundmeal.comments.push(comment);
          foundmeal.save((err) => {
            if (err) {
              console.log(err);
            }
          });
          req.flash('success', "New comment added!");
          res.redirect('/meals/' + req.params.id);
        }
      });
    }
  });
});

// Edit Comment routes

router.get('/:comment_id/edit', middleware.commentOwner, (req, res) => {
  Commentfeed.findById(req.params.comment_id, (err, comment) => {
    if (err) {
      console.log(err);
    } else {
      console.log(comment);
      res.render('editcomment', { comment: comment, meal_id: req.params.id });
    }
  });
});

router.put('/:comment_id/edit', middleware.commentOwner, (req, res) => {
  Commentfeed.findByIdAndUpdate(req.params.comment_id, req.body.comment, (err, comment) => {
    if (err) {
      console.log(err);
    } else {
      console.log(req.body.description);
      console.log(req.params.comment_id);
      console.log("Comment Updated");
      console.log(comment);
      req.flash('success', "Comment edited!");
      res.redirect('/meals/' + req.params.id);
    }
  });
});

// Comment Destroy

router.delete('/:comment_id/delete', middleware.commentOwner, (req, res) => {
  Commentfeed.findByIdAndRemove(req.params.comment_id, (err, comment) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Comment Removed');
      console.log(comment);
      req.flash('success', "Comment deleted!");
      res.redirect('/meals/' + req.params.id);
    }
  });
});

module.exports = router;

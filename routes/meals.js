// Setup

let express = require('express'),
  router = express.Router({ mergeParams: true }),
  Meal = require('../models/meals'),
  middleware = require('../middleware');

// Routes

router.get('/', (req, res) => {
  Meal.find({}, (err, allmeals) => {
    if (err) {
      console.log(err);
    } else {
      res.render('index', { meals: allmeals });
    }
  });
});

router.get('/new', middleware.isLoggedIn, (req, res) => {
  res.render('new');
});

router.get('/:id', (req, res) => {
  Meal.findById(req.params.id).populate("comments").exec((err, meal) => {
    if (err) {
      console.log(err);
    } else {
      console.log(meal);
      res.render('show', { meal: meal });
    }
  });
});

// Create Meal Route

router.post('/', (req, res) => {
  let name = req.body.name,
    image = req.body.image,
    description = req.body.description,
    ingredients = req.body.ingredients,
    creator = { id: req.user._id, username: req.user.username };
  meal = { name: name, image, description, creator, ingredients };
  Meal.create(meal, (err, meal) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Meal created');
      console.log(meal);
    }
  });
  req.flash('success', "Meal added!");
  res.send('ok');
});

// Edit Camp routes

router.get('/:id/edit', middleware.mealOwner, (req, res) => {
  Meal.findById(req.params.id, function (err, foundmeal) {
    if (err) {
      console.log(err);
    } else {
      console.log(foundmeal);
      res.render('edit', { meal: foundmeal });
    }
  });
});

router.put('/:id', middleware.mealOwner, (req, res) => {
  Meal.findByIdAndUpdate(req.params.id, req.body, (err, meal) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Meal updated");
      console.log(meal);
      req.flash('success', "Meal edited!");
      res.send('ok');
    }
  })

});

// Delete Meal Routes

router.delete('/:id/delete', middleware.mealOwner, (req, res) => {
  Meal.findByIdAndRemove(req.params.id, (err, meal) => {
    if (err) {
      console.log(err);
    } else {
      console.log("meal deleted");
      console.log(meal);
      req.flash('success', "Meal deleted!");
      res.redirect('/meals');
    }
  });
});

module.exports = router;

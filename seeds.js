
let mongoose = require('mongoose'),
  Meal = require('./models/meals'),
  Commentfeed = require('./models/comments'),
  User = require('./models/users');

let mealdata = [{
  name: "Sourdough",
  image: "/seedfile/Sourdough.jpg",
  ingredients: [{ name: 'Ripe Sourdough Starter', quantity: 241, type: 'g' }, { name: 'water', quantity: 340, type: 'g' }, { name: 'All-Purpose Flour', quantity: 602, type: 'g' }, { name: 'Salt', quantity: 12, type: 'g' }],
  description: "Combine the starter, water, and 362(g) of the flour. Beat vigorously for 1 minute.\n\nCover, and let rest at room temperature for 4 hours. Refrigerate overnight, for about 12 hours.\n\nAdd the remaining 241(g) flour, and the salt. Knead to form a smooth dough.\n\nAllow the dough to rise in a covered bowl until it's light and airy, with visible gas bubbles. Depending on the vigor of your starter, this may take up to 5 hours (or even longer), depending on how active your starter is. For best results, gently deflate the dough once an hour by turning it out onto a lightly floured work surface, stretching and folding the edges into the center, and turning it over before returning it to the bowl. Adding these folds will give you a better sense of how the dough is progressing, as well as strengthen it.\n\nGently divide the dough in half.\n\nGently shape the dough into two rounds or oval loaves, and place them on a lightly greased or parchment-lined baking sheet. Cover with lightly greased plastic wrap and let rise until very puffy, about 2 to 4 hours (or longer; give them sufficient time to become noticeably puffy). Don't worry if the loaves spread more than they rise; they'll pick up once they hit the oven's heat. Towards the end of the rising time, preheat the oven to 425(°F).\n\nSpray the loaves with lukewarm water.\n\nSlash the loaves. If you've made round loaves, try one slash across the center, and a curved slash on each side of it; or slash in the pattern of your choice. For oval loaves, two diagonal slashes are fine. Make the slashes fairly deep; a serrated bread knife, wielded firmly, works well here.\n\nBake the bread for 25 to 30 minutes, until it's a very deep golden brown. Remove it from the oven, and cool on a rack.\n\nStore bread, loosely wrapped in plastic, for several days at room temperature; freeze for longer storage."
}, {
  name: "Pasta with tomato sauce",
  image: "/seedfile/Pasta.jpg",
  ingredients: [{ name: 'Mild Italian sausage', quantity: .5, type: 'lb' }, { name: 'Lean Ground Beef', quantity: .5, type: 'lb' }, { name: 'Onion Large', quantity: 1, type: 'unit' }, { name: 'Minced Garlic Cloves', quantity: 2, type: 'unit' }, { name: '8 (ounce) Can Tomato Sauce', quantity: 4, type: 'unit' }, { name: '6 (ounce) Can Italian-style Tomato Paste', quantity: 1, type: 'unit' }, { name: 'Water', quantity: 3, type: 'cups' }, { name: 'Sugar', quantity: 1 / 4, type: 'cups' }, { name: 'Salt', quantity: 1, type: 'tsp' }, { name: 'Dried Parsley', quantity: 1, type: 'tsp' }, { name: 'Dried Basil', quantity: 1, type: 'tsp' }, { name: 'Ground Red Pepper', quantity: 1 / 4, type: 'tsp' }, { name: 'Sliced Fresh Mushrooms', quantity: 1, type: 'cup' }, { name: 'Cooked Linguini', quantity: 200, type: 'g' }, { name: 'Parmesan Cheese', quantity: 1, type: 'unit' }, { name: 'Breadsticks (optional)', quantity: 1, type: 'unit' },],
  description: "Remove casings from sausage, and discard. Cook sausage and ground beef in a large skillet or Dutch oven over medium heat 6 minutes, stirring until meat crumbles. Add onion and garlic, and sauté 4 minutes or until beef and sausage are no longer pink. Drain and set aside. Wipe skillet clean.\n\nCombine sauce and next 7 ingredients in skillet or Dutch oven; cook, stirring occasionally, 1 hour. Add sausage mixture and mushrooms. Cook, stirring occasionally, 1 hour and 30 minutes or until mixture thickens. Serve over linguine; sprinkle with cheese. Serve with breadsticks, if desired."
}, {
  name: "Croissants",
  image: "/seedfile/Croissant.jpg",
  ingredients: [{ name: 'Cold Unsalted Butter For Laminating', quantity: 250, type: 'g' }, { name: 'Egg + 1 tsp of Water', quantity: 1, type: 'unit' }, { name: 'French Type 55 Flour or Unbleached All-Purpose Flour', quantity: 500, type: 'g' }, { name: 'Water', quantity: 140, type: 'g' }, { name: 'Whole Milk', quantity: 140, type: 'g' }, { name: 'Sugar', quantity: 55, type: 'g' }, { name: 'Soft Unsalted Butter', quantity: 55, type: 'g' }, { name: 'Instant Yeast', quantity: 11, type: 'g' }, { name: 'Salt', quantity: 12, type: 'g' }],
  description: "DAY 1\n\nMaking the croissant dough\n\nWe usually do this part in the evening. Combine the dough ingredients and knead for 3 minutes, at low to medium speed, until the dough comes together and you’ve reached the stage of low to moderate gluten development. You do not want too much gluten development because you will struggle with the dough fighting back during laminating. Shape the dough like a disc, not a ball, before you refrigerate it, so it will be easier to roll it into a square shape the following day. Place the disc on a plate, cover with clingfilm and leave in the fridge overnight.\n\nDAY 2\n\nLaminating the dough\n\nCut the cold butter (directly from the fridge) lengthwise into 1,25 cm thick slabs. Arrange the pieces of butter on waxed paper to form a square of about 15 cm x 15 cm. Cover the butter with another layer of waxed paper and with a rolling pin pound butter until it’s about 19 cm x 19 cm. Trim / straighten the edges of the butter and put the trimmings on top of the square. Now pound lightly until you have a final square of 17 cm x 17 cm. Wrap in paper and refrigerate the butter slab until needed.\n\nTake the dough out of the fridge. With a rolling pin roll out the dough disc into a 26 cm x 26 cm square. Try to get the square as perfect as possible and with an even thickness. Get the slab of butter from the fridge. Place the dough square so one of the sides of the square is facing you and place the butter slab on it with a 45 degree angle to the dough so a point of the butter square is facing you. Fold a flap of dough over the butter, so the point of the dough reaches the center of the butter. Do the same with the three other flaps. The edges of the dough flaps should slightly overlap to fully enclose the butter. With the palm of your hand lightly press the edges to seal the seams.\n\nNow the dough with the sealed in butter needs to be rolled out. With a lightly floured rolling pin start rolling out, on a lightly flour dusted surface, the dough to a rectangle of 20 x 60 cm. Start rolling from the center of the dough towards the edges, and not from one side of the dough all the way to the other side. This technique helps you to keep the dough at an even thickness. You can also rotate your dough 180 degrees to keep it more even, because you tend to use more pressure when rolling away from you than towards yourself. You can use these techniques during all the rolling steps of this recipe. Aim at lengthening the dough instead of making it wider and try to keep all edges as straight as possible.\n\nFold the dough letter style, cover with clingfilm and refrigerate for 30 minutes (fold one third of the dough on top of itself and then fold the other side over it). Repeat the rolling and folding two more times (ending up with 27 layers of butter in total), each time rolling until the dough is about 20 cm x 60 cm. After each fold you should turn the dough 90 degrees before rolling again. The open ‘end’ of the dough should be towards you every time when rolling out the dough (you can see this in our croissant making video at around 3:40 minutes). After the second turn, again give it a 30 minute rest in the fridge. After the third turn you leave the dough in the fridge overnight until day 3, the actual croissant making day!\n\nRoll out to 20 cm x 60 cm\nFold\nRefrigerate 30 minutes\nRotate 90 degrees\nRoll out to 20 cm x 60 cm\nFold\nRefrigerate 30 minutes\nRotate 90 degrees\nRoll out to 20 cm x 60 cm\nFold\nRefrigerate until day 3\nRotate 90 degrees\nRoll out to 20 cm x 110 cm\n\nDAY 3\n\nDividing the dough\n\nTake the dough from the fridge.Lightly flour your work surface.Now very gently roll the dough into a long and narrow strip of 20 cm x 110 cm.If the dough starts to resist too much or shrink back during this process you can fold it in thirds and give it a rest in the fridge for 10 to 20 minutes before continuing.Do not fight the dough, when the dough refuses to get any longer, rest it in the fridge!It is such a shame to ruin two days of work.\n\nWhen your dough has reached its intended shape, carefully lift it a few centimeters to allow it to naturally shrink back from both sides.This way it will not shrink when you cut it.Your strip of dough should be long enough to allow you to trim the ends to make them straight and still be left with a length of about 100 cm.\n\nShaping the croissants\n\nFor the next stage you will need a tape measure and a pizza wheel. Lay a tape measure along the top of the dough. With the wheel you mark the top of the dough at 12,5 cm intervals along the length (7 marks total). Now lay the tape measure along the bottom of the dough and make a mark at 6,25 cm. Then continue to make marks at 12,5 cm intervals from this point (8 marks total). So the bottom and the top marks do not align with each other and form the basis for your triangles.\n\nNow make diagonal cuts starting from the top corner cutting down to the first bottom mark. Make diagonal cuts along the entire length of the dough. Then change the angle and make cuts from the other top corner to the bottom mark to create triangles. Again repeat this along the length of the dough. This way you will end up with 15 triangles and a few end pieces of dough.\n\nUsing your pizza wheel, make 1.5 cm long notches in the center of the short side of each dough triangle.\n\nNow very gently elongate each triangle to about 25 cm. This is often done by hand, but we have found that elongating with a rolling pin, very carefully, almost without putting pressure on the dough triangle, works better for us. You can try both methods and see what you think gives the best result.\n\nAfter you cut a notch in the middle of the short end of the triangle, try and roll the two wings by moving your hands outwards from the center, creating the desired shape with a thinner, longer point. Also try and roll the dough very tightly at the beginning and put enough pressure on the dough to make the layers stick together (but not so much as to damage the layers of course).\n\nProofing and baking\n\nArrange the shaped croissants on baking sheets, making sure to keep enough space between them so they will not touch when proofing and baking. Combine the egg with a teaspoon of water and whisk until smooth. Give the croissants their first thin coating of egg wash.\n\nProof the croissants draft-free at an ideal temperature of 24ºC to 26.5ºC / 76ºF to 79ºF (above that temperature there is a big chance butter will leak out!). We use our small Rofco B20 stone oven as a croissant proofing cabinet by preheating it for a minute to 25ºC / 77ºF. It retains this temperature for a long time because of the oven stones and isolation. The proofing should take about 2 hours. You should be able to tell if they are ready by carefully shaking the baking sheet and see if the croissants slightly wiggle. You should also be able to see the layers of dough when looking at your croissants from the side.\n\nRight before baking, give the croissants their second thin coat of egg wash. We bake the croissants in our big convection oven for 6 minutes at 195ºC, then lowering the temperature to 165ºC, and bake them for another 9 minutes. Hamelman suggest baking the croissants for 18 to 20 minutes at 200ºC, turning your oven down a notch if you think the browning goes too quickly. But you really have to learn from experience and by baking several batches what the ideal time and temperature is for your own oven. Take out of the oven, leave for a few minutes on the baking sheet, then transfer to a cooling rack.\n\nBest eaten while warm and fresh of course. Croissant we don’t eat or share within a day we freeze. We put them in the preheated oven (180ºC / 355ºF) for 8 minutes straight from the freezer. Nothing wrong with that, croissants eaten nice and warm, almost as good as the fresh ones…almost!"
}, {
  name: "Pizza",
  image: "/seedfile/Pizza.jpg",
  measurement: 'cups',
  ingredients: [{ name: 'Water (100 (°F) to 110 (°F)', quantity: 1.5, type: 'cups' }, { name: 'All-Purpose Flour', quantity: 4, type: 'cups' }, { name: 'Active Dry Yeast', quantity: 3 / 4, type: 'tsps' }, { name: 'Kosher Salt', quantity: 2.5, type: 'tsp' }, { name: 'Extra Virgin Oil', type: 'unit' }, { name: 'Fresh Basil', type: 'unit' }, { name: 'Mozzarella', quantity: 8, type: 'oz' }, { name: '28 (oz) Can Whole peeled Tomatoes', quantity: 1, type: 'unit' }, { name: 'Cornmeal', type: 'unit' }],
  description: "Make the dough: Combine the warm water and yeast in a small bowl, stirring to dissolve the yeast. Combine the flour and salt in a medium bowl. Add the yeast mixture to the flour and stir to make a shaggy dough. (The dough should be tacky. If it feels too wet and sticky, add flour, 1 (tablespoon) at a time; if it's too stiff, add a little water.) Transfer to a lightly oiled surface and knead until smooth and elastic, about 3 minutes. Place an inverted bowl over the dough and let rise slightly, 30 minutes. Divide the dough into 4 pieces and form each into a ball; arrange 3 (inches) apart on a lightly oiled baking sheet. Rub the tops of the dough lightly with olive oil and cover the baking sheet with plastic wrap. Refrigerate overnight.\n\nRemove the dough from the refrigerator about 2 hours before baking; let sit, covered, until ready to use. One hour before baking, put a pizza stone or inverted baking sheet on the middle oven rack and preheat to 500 degrees F (or 550 degrees F if your oven goes that high).\n\nMake the sauce: Combine the tomatoes and their juices with 1 (teaspoon) salt in a blender; blend until smooth.\n\nGenerously sprinkle a pizza peel or an inverted baking sheet with cornmeal. Place 1 ball of dough upside down on the cornmeal using floured hands. Gently pull the dough into an 8- to 10(inch) circle, reflouring your hands as needed and being careful not to deflate the dough. Spread about 1/4 (cup) tomato sauce on the crust; top with one-quarter of the mozzarella. Drizzle with 1 to 2 teaspoons olive oil and season with salt.\n\nSlide the pizza onto the hot stone and bake until the crust is dark golden brown and the cheese is bubbling, 7 to 9 minutes. Transfer to a cutting board and sprinkle with basil. Let cool 2 minutes before slicing. Repeat to make 3 more pizzas."
}
];

let commentdata = [{
  text: 'Great one!'
}
];

let userData = [{
  username: "Homer",
  password: "password"
}];

// Functions for Callback
function userRemove() {
  User.remove({}, (err, users) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Users removed');
      console.log(users);
      userCreate();
    }
  });
}

function commentRemove() {
  Commentfeed.remove({}, (err, comments) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Comments removed');
      console.log(comments);
      userRemove();
    }
  });
}
function mealRemove(callback) {
  Meal.remove({}, (err, meals) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Meals removed');
      console.log(meals);
      callback();
    }
  });
}

function userCreate() {
  User.register({ username: userData[0].username }, userData[0].password, (err, user) => {
    if (err) {
      console.log('Error while registering');
      console.log(err);
    } else {
      console.log('User registered');
      mealCreate();
    }
  });
}

function mealCreate() {
  mealdata.forEach(seed => {
    Meal.create(seed, (err, meal) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Meal created");
        Commentfeed.create(commentdata[0], (err, comment) => {
          if (err) {
            console.log(err);
          } else {
            console.log("Comment created");
            User.find({ username: 'Homer' }, (err, user) => {
              comment.author.id = user[0]._id;
              comment.author.username = user[0].username;
              comment.save();
              meal.comments.push(comment);
              meal.creator.id = user[0]._id;
              meal.creator.username = user[0].username;
              meal.save(err => {
                if (err) {
                  console.log(err);
                }
              });
            });
          }
        });
      }
    });
  });
}

// Master function for seed file
function seedDB() {
  mealRemove(commentRemove);
}
module.exports = seedDB;

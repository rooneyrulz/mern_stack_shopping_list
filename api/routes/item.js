const express = require("express");
const router = express.Router();

//Require shoppinglist schema
const ShoppingList = require("../models/itemSchema");

//Get all of the data from the database
router.get('/items', (req, res, next) => {
  ShoppingList
    .find()
    .sort({ date: -1 })
    .exec()
    .then(items => {
      if (items.length < 1) {
        return res.status(409).json('items not found!');
      } else {
        return res.status(200).json(items);
      }
    })
    .catch(err => {
      return res.status(500).json(err);
    });
});

//Post some items to the database
router.post('/item', (req, res, next) => {
  let newShoppingList = new ShoppingList({
    name: req.body.name,
    price: req.body.price
  });
  return newShoppingList
    .save()
    .then(item => {
      return res.status(200).json(item);
    })
    .catch(err => {
      return res.status(500).json(err);
    });
});

//Delete some data from the database
router.delete('/item/:id', (req, res, next) => {
  const itemId = req.params.id;
  ShoppingList
    .deleteOne({_id: itemId})
    .exec()
    .then(item => {
      return res.status(200).json({success: true});
    })
    .catch(err => {
      return res.status(200).json(err);
    });
});


module.exports = router;
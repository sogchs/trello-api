const Card = require('../models/card.model');
const Column = require('../models/column.model');
const mongoose = require('mongoose');


module.exports.list = (req, res, next) => {
  Card.find()
      .then((cards) => {res.status(201).json(cards)})
      .catch(err => next(err))
}

// module.exports.create = (req, res, next) => {
//   const card = new Card( req.body );
  
//   if(req.file){
//     card.imageUrl = req.file.secure_url;
//   }

//   card.save()
//       .then((card) => { res.status(201).json(card) })
//       .catch(err => next(err))
// }
module.exports.create = (req, res, next) => {
  const card = new Card(req.body);

  console.log(req.file);
  if (req.file) {
    card.imageURL = req.file.secure_url;
  }

  card.save()
    .then(card => res.status(201).json(card))
    .catch(next);
}

module.exports.detail = (req, res, next) => {
  Card.findById(req.params.id)
      .then((card) => {res.status(201).json(card)})
      .catch(err => next(err))
}

module.exports.update = (req, res, next) => {
  Card.findByIdAndUpdate({ _id: req.params.id }, req.body)
      .then((card) => {res.status(201).json(card)})
      .catch(err => next(err))
}

module.exports.delete = (req, res, next) => {
  Card.findByIdAndDelete({ _id: req.params.id })
      .then((card) => {res.status(201).json(card)})
      .catch(err => next(err))
}
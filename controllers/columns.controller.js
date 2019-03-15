const Column = require('../models/column.model');
const mongoose = require('mongoose');


module.exports.list = (req, res, next) => {
    Column.find()
        .populate('cards')
        .then((columns) => {res.status(201).json(columns)})
        .catch(err => next(err))
  }

module.exports.create = (req, res, next) => {
    const column = new Column( req.body );

    column.save()
        .then((column) => { res.status(201).json(column) })
        .catch(err => next(err))
}

module.exports.detail = (req, res, next) => {
    Column.findById(req.params.id)
        .populate('cards')
        .then((column) => {
            if (!column) {
                throw createError(404, 'Column not found');
              } else {
                res.json(column);
              }
            })
            .catch(next);
}

module.exports.update = (req, res, next) => {
    Column.findByIdAndUpdate({ _id: req.params.id }, req.body)
        .then((column) => {
            if (!column) {
                throw createError(404, 'column not found');
              } else {
                res.json(column);
              }
            })
            .catch(next);
}

module.exports.delete = (req, res, next) => {
    Column.findByIdAndDelete({ _id: req.params.id })
        .then((column) => {
            if (!column) {
                throw createError(404, 'column not found');
              } else {
                res.status(204).json();
              }
            })
            .catch(next);        
}
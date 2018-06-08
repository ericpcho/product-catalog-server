'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const { Products } = require('./models');
const router = express.Router();
const jsonParser = bodyParser.json({limit: "1000kb"});

// Anyone Get
router.get('/', (req, res) => {

    Products
      .find()
      .then(products => res.status(200).json(products));

});

// Anyone Post
router.post('/', jsonParser, (req, res) => {
  const newProducts = req.body

  Products
    .insertMany(newProducts)
    .then(product => {
      res.status(201).json(product);
    })
    .catch(() => {
      res.status(500).json({ error: 'Something went wrong' });
    });
});

module.exports = { router };
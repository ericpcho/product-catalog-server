'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const { ExternalCatalogs } = require('./models');
const router = express.Router();
const jsonParser = bodyParser.json({limit: "1000kb"});

// Anyone Get
// router.get('/catalogs', (req, res) => {

//     ExternalCatalogs
//       .find()
//       .then(catalog => res.status(200).json(catalog));

// });

// Anyone Post
router.post('/', jsonParser, (req, res) => {
  const newCatalog = req.body

  ExternalCatalogs
    .create(newCatalog)
    .then(catalog => {
      res.status(201).json(catalog);
    })
    .catch(() => {
      res.status(500).json({ error: 'Something went wrong' });
    });
});

router.get('/:id', (req, res) => {
    Menus
      .findById(req.params.id)
      .then(menu => {
        res.status(200).json(menu);
      })
      .catch(() => {
        res.status(500).json({error: 'Something went wrong'}); 
      });
  });

module.exports = { router };
'use strict';

const express = require('express');
const router = express.Router();
const Gallery = require('../database/models/Gallery');

router.get('/', (req, res) => {
  new Gallery()
  .fetchAll()
  .then((result) => {
    console.log(result.toJSON());
    return res.render('index.hbs');
  })
});

module.exports = router;

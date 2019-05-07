const express = require('express');
const router = express.Router();
const knex = require('../database/models/gallery');

router
  .get('/', (req, res) => {
    res.render('index.hbs');
  })

module.exports = router;
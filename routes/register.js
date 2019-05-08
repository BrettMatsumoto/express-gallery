'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../database/models/gallery');

router.get('/', (req, res) => {
  console.log('reached register route');
  res.render('./register.hbs');
});

module.exports = router;

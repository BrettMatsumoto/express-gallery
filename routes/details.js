'use strict';

const express = require('express');
const router = express.Router();
const Gallery = require('../database/models/Gallery');
const users = require('../database/models/User');

router.get('/details', (req, res) => {
  res.render('templates/details.hbs');
});

module.exports = router;

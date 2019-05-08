'use strict';

const express = require('express');
const router = express.Router();
const gallery = require('../database/models/gallery');
const users = require('../database/models/users');

router.get('/details', (req, res) => {
  res.render('templates/details.hbs');
});

module.exports = router;

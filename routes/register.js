'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../database/models/gallery');

router.get('/register.html', (req, res) => {
  console.log('reach register route');
  res.render('/login.html');
});

module.exports = router;

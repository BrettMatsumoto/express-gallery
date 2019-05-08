'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../database/models/users');

router
  .get('/', (req, res) => {
    res.render('templates/users.hbs');
  })

module.exports = router;
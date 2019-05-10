'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../database/models/User');

router
  .get('/', (req, res) => {
    res.render('./templates/user.hbs');
  })

module.exports = router;
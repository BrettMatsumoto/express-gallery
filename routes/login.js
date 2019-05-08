'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../database/knex');
const passport = require('passport');


router.get('/', (req, res) => {
  res.render('./login.hbs');
});

module.exports = router;

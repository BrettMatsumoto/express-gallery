'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../database/models/Gallery');

router.get('/', (req, res) => {
  console.log('reached register route');
  res.render('./templates/register.hbs');
});


module.exports = router;

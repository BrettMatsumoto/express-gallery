const express = require('express');
const router = express.Router();
const knex = require('../database/models/gallery');

router
  .get('/register', (req, res) => {
    console.log('reach register route')
    res.render('/register.html');
  })

module.exports = router;
'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../database/knex');
const passport = require('passport');


router.get('/', (req, res) => {
  res.render('./templates/login.hbs');
});

// router.post('/', (req, res) => {
//   console.log('hits login post');
//   passport.authenticate('local', {
//     successRedirect: '/secret',
//     failureRedirect: '/login',
//   })
// })

module.exports = router;

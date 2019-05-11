'use strict';

const express = require('express');
const router = express.Router();
const Gallery = require('../database/models/Gallery');

router.get('/', (req, res) => {
  new Gallery()
  .fetchAll()
  .then((result) => {
    result = result.toJSON();
    let bigPicture = result.shift();

    const data = {
      id: bigPicture.id,
      author: bigPicture.author,
      link: bigPicture.link,
      description: bigPicture.description,
      smallPictures: result
    }
    return res.render('index.hbs', data);
  })
});

module.exports = router;

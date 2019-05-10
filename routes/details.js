'use strict';

const express = require('express');
const router = express.Router();
const Gallery = require('../database/models/Gallery');
const users = require('../database/models/User');

router.get('/:id', (req, res) => {
  new Gallery().fetchAll().then((result) => {
    result = result.toJSON();
    
    let data = {};

    for (let i = 0; i < result.length; i++) {
      // console.log(typeof(result[i].id))
      if (result[i].id === parseInt(req.params.id)) {
        let bigPicture = result.splice(i, 1)[0]
        console.log(bigPicture)
        data = {
          id: bigPicture.id,
          author: bigPicture.author,
          link: bigPicture.link,
          description: bigPicture.description,
          smallPictures: result,
        };
      }
    }

    console.log('data', data);
    return res.render('templates/details.hbs', data);
  });
});

module.exports = router;

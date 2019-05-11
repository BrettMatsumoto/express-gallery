'use strict';

const express = require('express');
const router = express.Router();
const Gallery = require('../database/models/Gallery');
const guard = require('../middleware/guard');

router.get('/new', (req, res) => {
  // console.log('/new route works');
  return res.render('templates/new.hbs');
});

router.get('/:id/edit', (req, res) => {
  console.log('/:id/edit route works');
  return res.render('templates/edit');
});

router.get('/:id', guard, (req, res) => {
  new Gallery().fetchAll().then((result) => {
    result = result.toJSON();

    let data = {};

    for (let i = 0; i < result.length; i++) {
      if (result[i].id === parseInt(req.params.id)) {
        let bigPicture = result.splice(i, 1)[0];

        data = {
          id: bigPicture.id,
          author: bigPicture.author,
          link: bigPicture.link,
          description: bigPicture.description,
          smallPictures: result,
        };
      }
    }

    return res.render('templates/gallery.hbs', data);
  });
});

router.post('/new', guard, (req, res) => {
  return new Gallery({
    author: req.body.author,
    link: req.body.link,
    description: req.body.description,
    user_id: req.user.id,
  })
    .save()
    .then((user) => {
      // console.log(user);
      return res.redirect('/');
    });
});

router.put('/:id', guard, (req, res) => {
  return new Gallery
    .save({
      author: req.body.author,
      link: req.body.link,
      description: req.body.description
    })
    .then(() => {
      return res.redirect('/')
    })
});

router.delete('/:id', guard, (req, res) => {
  
})

module.exports = router;

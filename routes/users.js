'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../database/models/User');
const guard = require('../middleware/guard');

router.get('/', (req, res) => {
  res.render('./templates/user.hbs');
});

// router.get('/:id', guard, (req, res) => {
//   new User().fetchAll().then((result) => {
//     console.log(result.toJSON())
//     result = result.toJSON();

//     let data = {};

//     for (let i = 0; i < result.length; i++) {
//       if (result[i].id === parseInt(req.params.id)) {
//         let bigPicture = result.splice(i, 1)[0];

//         data = {
//           id: bigPicture.id,
//           author: bigPicture.author,
//           link: bigPicture.link,
//           description: bigPicture.description,
//           smallPictures: result,
//         };
//       }
//     }

//     return res.render('templates/details.hbs', data);
//   });
// });

module.exports = router;

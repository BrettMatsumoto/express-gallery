'use strict';

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('gallery')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('gallery').insert([
        {
          author: 'McAuthor',
          link: 'https://assets.pernod-ricard.com/nz/media_images/test.jpg?hUV74FvXQrWUBk1P2.fBvzoBUmjZ1wct',
          description: 'this is first post',
          user_id: 1,
        },
        {
          author: 'McAuthor Jr',
          link: 'https://assets.pernod-ricard.com/nz/media_images/test.jpg?hUV74FvXQrWUBk1P2.fBvzoBUmjZ1wct',
          description: 'this is second post',
          user_id: 2,
        },
        {
          author: 'McAuthor Sr',
          link: 'https://assets.pernod-ricard.com/nz/media_images/test.jpg?hUV74FvXQrWUBk1P2.fBvzoBUmjZ1wct',
          description: 'this is third post',
          user_id: 3,
        },
      ]);
    });
};

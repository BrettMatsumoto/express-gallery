'use strict';

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('gallery')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('gallery').insert([
        {
          author: 'McAuthor Sr',
          link: 'https://www.geirangerfjord.no/upload/images/2019viking_fjordsenter/1.jpg',
          description: 'This is the first post',
          user_id: 1,
        },
        {
          author: 'McAuthor Jr',
          link: 'http://www.archdaily.com/wp-content/uploads/2010/11/1290807444-fantastic-norway-3-528x316.jpg',
          description: 'This is the second post',
          user_id: 2,
        },
        {
          author: 'McAuthor the Third',
          link: 'https://www.designboom.com/weblog/images/images_2/lauren/mountain%20hill%20cabin/mhc01.jpg',
          description: 'This is the third post',
          user_id: 3,
        },
        {
          author: 'McAuthor the Fourth',
          link:
            'https://2.bp.blogspot.com/_Ut7-u5BlpeI/TRnr4is4AFI/AAAAAAAAJZ8/1hTWyMTpSUM/s1600/Fantastic+Norway++.+Sirene+restaurant+.+Oslo.jpg',
          description: 'This is the fourth post',
          user_id: 4,
        },
        {
          author: 'McAuthor the Fifth',
          link: 'https://cdn.theculturetrip.com/images/56-225491-sn-hetta-1-credit-diephotodesign.de.jpg',
          description: 'This is the Fifth post',
          user_id: 5,
        },
      ]);
    });
};

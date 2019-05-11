'use strict';

const bcrypt = require('bcryptjs');
const saltRounds = 12;

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'user1', password: bcrypt.hashSync('passw0rd', saltRounds), email: 'person1@email.com'},
        {username: 'user2', password: bcrypt.hashSync('p@ssw0rd', saltRounds), email: 'person2@email.com'},
        {username: 'user3', password: bcrypt.hashSync('p@$$w0rd', saltRounds), email: 'person3@email.com'}
      ]);
    });
};

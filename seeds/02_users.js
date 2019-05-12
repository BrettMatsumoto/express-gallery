'use strict';

const bcrypt = require('bcryptjs');
const saltRounds = 12;

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        { username: 'Frank', password: bcrypt.hashSync('passw0rd', saltRounds), email: 'person1@email.com' },
        { username: 'Luke', password: bcrypt.hashSync('p@ssw0rd', saltRounds), email: 'person2@email.com' },
        { username: 'Brenda', password: bcrypt.hashSync('p@s$w0rd', saltRounds), email: 'person3@email.com' },
        { username: 'Brett', password: bcrypt.hashSync('p@$$w0rd', saltRounds), email: 'person4@email.com' },
        { username: 'Ronald', password: bcrypt.hashSync('P@$$w0rd', saltRounds), email: 'person5@email.com' },
      ]);
    });
};

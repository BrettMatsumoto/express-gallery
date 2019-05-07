
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {username: 'user1', password: 'passw0rd', email: 'person1@email.com'},
        {username: 'user2', password: 'p@ssw0rd', email: 'person2@email.com'},
        {username: 'user3', password: 'p@$$w0rd', email: 'person3@email.com'}
      ]);
    });
};

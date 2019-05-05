
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {author: 'McAuthor', link: 'myLinkAddress', description: 'this is first post'},
        {author: 'McAuthor Jr', link: 'mySecondLinkAddress', description: 'this is second post'},
        {author: 'McAuthor Sr', link: 'myThirdLinkAddress', description: 'this is third post'}
      ]);
    });
};

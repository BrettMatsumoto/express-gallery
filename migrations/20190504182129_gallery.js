'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('gallery', (table) => {
    table.increments('id');
    table.string('author').notNull();
    table.string('link').notNull();
    table.string('description').notNull();
    table.integer('user_id').notNull();
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('gallery')
};

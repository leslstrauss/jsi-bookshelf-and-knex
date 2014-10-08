'use strict';

exports.up = function(knex, Promise) {
  // migrate forwards
    return knex.schema.createTable('countries', function(table) {
    table.increments('id').primary();
    table.string('name');
  });
};


//migrate back
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('countries');
};

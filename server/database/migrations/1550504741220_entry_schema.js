"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class EntrySchema extends Schema {
  up() {
    this.table("entries", table => {
      // alter table
      table.string("song").alter(); // remove Nullable from song field
    });
  }

  down() {
    this.table("entries", table => {
      // reverse alternations
      table
        .string("song")
        .notNullable()
        .alter();
    });
  }
}

module.exports = EntrySchema;

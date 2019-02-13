"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class EntrySchema extends Schema {
  up() {
    this.create("entries", table => {
      table.increments();
      table.timestamps();
      table
        .string("country")
        .notNullable()
        .references("name")
        .inTable("countries");
      table
        .integer("country_id")
        .unsigned()
        .references("id")
        .inTable("countries");
      table.string("artist").notNullable();
      table.string("song").notNullable();
      table.string("spotifyId");
      table.string("musicVideoId");
      table.string("performanceId");
      table.string("nationalPerformanceId");
    });
  }

  down() {
    this.drop("entries");
  }
}

module.exports = EntrySchema;

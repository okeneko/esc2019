"use strict";

const Database = use("Database");
const Country = use("App/Models/Country");
const Entry = use("App/Models/Entry");

class CountryController {
  async index() {
    return await Country.all();
  }
  async entryless() {
    const countries = await Database.select("name")
      .from("countries")
      .leftOuterJoin("entries", "countries.name", "entries.country")
      .where("entries.id", null);
    return countries;
  }
}

module.exports = CountryController;

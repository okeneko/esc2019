"use strict";

const Country = use("App/Models/Country");

class CountryController {
  async index() {
    return await Country.all();
  }
}

module.exports = CountryController;

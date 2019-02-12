"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Country extends Model {
  entry() {
    return this.hasOne("App/Models/Entry");
  }
}

module.exports = Country;

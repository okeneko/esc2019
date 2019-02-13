"use strict";

/*
|--------------------------------------------------------------------------
| CountrySeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");
const Country = use("App/Models/Country");

const countries = [
  { name: "Albania" },
  { name: "Armenia" },
  { name: "Australia" },
  { name: "Austria" },
  { name: "Azerbaijan" },
  { name: "Belarus" },
  { name: "Belgium" },
  { name: "Croatia" },
  { name: "Cyprus" },
  { name: "Czech Republic" },
  { name: "Denmark" },
  { name: "Estonia" },
  { name: "Finland" },
  { name: "France" },
  { name: "Georgia" },
  { name: "Germany" },
  { name: "Greece" },
  { name: "Hungary" },
  { name: "Iceland" },
  { name: "Ireland" },
  { name: "Israel" },
  { name: "Italy" },
  { name: "Latvia" },
  { name: "Lithuania" },
  { name: "Malta" },
  { name: "Moldova" },
  { name: "Montenegro" },
  { name: "Netherlands" },
  { name: "North Macedonia" },
  { name: "Norway" },
  { name: "Poland" },
  { name: "Portugal" },
  { name: "Romania" },
  { name: "Russia" },
  { name: "San Marino" },
  { name: "Serbia" },
  { name: "Slovenia" },
  { name: "Spain" },
  { name: "Sweden" },
  { name: "Switzerland" },
  { name: "Ukraine" },
  { name: "United Kingdom" }
];

class CountrySeeder {
  async run() {
    await Country.createMany(countries);
  }
}

module.exports = CountrySeeder;

"use strict";

const Database = use("Database");
const Entry = use("App/Models/Entry");
const Country = use("App/Models/Country");

class EntryController {
  async index() {
    return await Database.table("entries").orderBy("country");
  }

  parseCountry(country) {
    const words = country.split("-");
    return words
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join()
      .replace(",", " ");
  }

  async get({ params }) {
    let { country } = params;
    country = this.parseCountry(country);
    const entry = await Entry.findBy("country", country);
    if (!entry)
      return {
        error: "This entry does not exist."
      };
    return entry;
  }

  async create({ request }) {
    const {
      country,
      artist,
      song,
      spotifyId,
      musicVideoId,
      performanceId,
      nationalPerformanceId
    } = request.all();
    const countryObj = await Country.findBy("name", country);
    if (!countryObj)
      return {
        error: "This country doesn't take part in this year's contest."
      };
    const entry = new Entry();
    entry.fill({
      country,
      artist,
      song,
      spotifyId,
      musicVideoId,
      performanceId,
      nationalPerformanceId
    });
    await countryObj.entry().save(entry);
    return entry;
  }

  async update({ request, params }) {
    const {
      artist,
      song,
      spotifyId,
      musicVideoId,
      performanceId,
      nationalPerformanceId
    } = request.all();
    let { country } = params;
    country = this.parseCountry(country);
    const entry = await Entry.findBy("country", country);
    if (!entry) return { error: "This entry does not exist." };
    entry.merge({
      artist,
      song,
      spotifyId,
      musicVideoId,
      performanceId,
      nationalPerformanceId
    });
    await entry.save();
    return entry;
  }

  async destroy({ params }) {
    let { country } = params;
    country = this.parseCountry(country);
    const entry = await Entry.findBy("country", country);
    if (!entry) return { error: "This entry does not exist." };
    await entry.delete();
    return entry;
  }
}

module.exports = EntryController;

"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

const Url = require("url-parse");

class Entry extends Model {
  country() {
    return this.belongsTo("App/Models/Country");
  }

  setSpotifyId(spotifyId) {
    const { pathname } = new Url(spotifyId);
    if (pathname.includes("/track")) {
      return pathname.substring(7);
    } else if (pathname.includes("track:")) {
      return pathname.substring(6);
    }
  }

  setMusicVideoId(musicVideoId){
    return parseYoutubeLink(musicVideoId);
  }

  setPerformanceId(performanceId){
    return parseYoutubeLink(performanceId);
  }

  setNationalPerformanceId(nationalPerformanceId){
    return parseYoutubeLink(nationalPerformanceId);
  }

}

parseYoutubeLink(link){
  const { pathname, hostname, query  } = new Url(link, true);
  if (pathname.includes("/watch")) {
    return query.v;
  } else if (hostname.includes("youtu.be")) {
    return pathname.substring(1);
  }
}

module.exports = Entry;

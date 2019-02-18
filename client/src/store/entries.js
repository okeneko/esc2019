import HTTP from "../http";

export default {
  namespaced: true,
  state: {
    entries: [],
    // For creating and updating entries
    creating: false,
    country: null,
    artist: null,
    song: null,
    spotifyLink: null,
    performanceLink: null,
    musicVideoLink: null,
    nationalPerformanceLink: null,
    entrylessCountries: []
  },
  actions: {
    async fetchEntries({ commit }) {
      const { data } = await HTTP().get("entries");
      commit("setEntries", data);
      return data;
    },
    async fetchEntrylessCountries({ commit }) {
      const { data } = await HTTP().get("countries/entryless");
      commit("setEntrylessCountries", data);
      return data;
    },
    async createEntry({ state, dispatch }) {
      const { data } = await HTTP().post("entries", {
        country: state.country,
        artist: state.artist,
        song: state.song,
        spotifyId: state.spotifyLink === "" ? null : state.spotifyLink,
        performanceId:
          state.performanceLink === "" ? null : state.performanceLink,
        musicVideoId: state.musicVideoLink === "" ? null : state.musicVideoLink,
        nationalPerformanceId:
          state.nationalPerformanceLink === ""
            ? null
            : state.nationalPerformanceLink
      });
      await dispatch("fetchEntries");
      return data;
    },
    async updateEntry({ state, dispatch }) {
      const country = state.country.toLowerCase().replace(" ", "-");
      const { data } = await HTTP().patch(`entries/${country}`, {
        artist: state.artist,
        song: state.song,
        spotifyId: state.spotifyLink === "" ? null : state.spotifyLink,
        performanceId:
          state.performanceLink === "" ? null : state.performanceLink,
        musicVideoId: state.musicVideoLink === "" ? null : state.musicVideoLink,
        nationalPerformanceId:
          state.nationalPerformanceLink === ""
            ? null
            : state.nationalPerformanceLink
      });
      await dispatch("fetchEntries");
      return data;
    },
    async deleteEntry({ state, dispatch }) {
      const country = state.country.toLowerCase().replace(" ", ",");
      const { data } = await HTTP().delete(`entries/${country}`);
      await dispatch("fetchEntries");
      return data;
    }
  },
  mutations: {
    setEntries(state, entries) {
      state.entries = entries;
    },
    setCreate(state) {
      state.creating = true;
    },
    setUpdate(state, entry) {
      state.creating = false;
      state.country = entry.country;
      state.artist = entry.artist;
      state.song = entry.song;
      if (!!entry.spotifyId)
        state.spotifyLink = "https://open.spotify.com/track/" + entry.spotifyId;
      if (!!entry.performanceId)
        state.performanceLink = "https://youtu.be/" + entry.performanceId;
      if (!!entry.musicVideoId)
        state.musicVideoLink = "https://youtu.be/" + entry.musicVideoId;
      if (!!entry.nationalPerformanceId)
        state.nationalPerformanceLink =
          "https://youtu.be/" + entry.nationalPerformanceId;
    },
    setCountry(state, country) {
      state.country = country;
    },
    setArtist(state, artist) {
      state.artist = artist;
    },
    setSong(state, song) {
      state.song = song;
    },
    setSpotifyLink(state, spotifyLink) {
      state.spotifyLink = spotifyLink;
    },
    setPerformanceLink(state, performanceLink) {
      state.performanceLink = performanceLink;
    },
    setMusicVideoLink(state, musicVideoLink) {
      state.musicVideoLink = musicVideoLink;
    },
    setNationalPerformanceLink(state, nationalPerformanceLink) {
      state.nationalPerformanceLink = nationalPerformanceLink;
    },
    setNull(state) {
      state.creating = false;
      state.country = null;
      state.artist = null;
      state.song = null;
      state.spotifyLink = null;
      state.performanceLink = null;
      state.musicVideoLink = null;
      state.nationalPerformanceLink = null;
    },
    setEntrylessCountries(state, countries) {
      state.entrylessCountries = countries;
    }
  }
};

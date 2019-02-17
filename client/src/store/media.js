export default {
  namespaced: true,
  state: {
    country: null,
    spotify: null,
    youtube: null,
    youtubeIds: {
      performanceId: null,
      musicVideoId: null,
      nationalPerformanceId: null
    }
  },
  mutations: {
    setSpotify(state, entry) {
      state.country = entry.country;
      state.youtube = null;
      state.spotify = entry.spotifyId;
    },
    setYouTube(state, entry) {
      state.country = entry.country;
      state.spotify = null;
      state.youtubeIds = {
        performanceId: entry.performanceId,
        musicVideoId: entry.musicVideoId,
        nationalPerformanceId: entry.nationalPerformanceId
      };
      if (!!entry.performanceId) state.youtube = entry.performanceId;
      else if (!!entry.musicVideoId) state.youtube = entry.musicVideoId;
      else if (!!entry.nationalPerformanceId)
        state.youtube = entry.nationalPerformanceId;
    },
    setVideo(state, vid) {
      switch (vid) {
        case "esc":
          state.youtube = state.youtubeIds.performanceId;
          break;

        case "mv":
          state.youtube = state.youtubeIds.musicVideoId;
          break;

        case "nf":
          state.youtube = state.youtubeIds.nationalPerformanceId;
          break;
      }
    },
    emptyMedia(state) {
      state.spotify = null;
      state.youtube = null;
    }
  }
};

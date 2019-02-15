export default {
  namespaced: true,
  state: {
    spotify: null,
    youtube: null
  },
  mutations: {
    setSpotify(state, id) {
      state.youtube = null;
      state.spotify = id;
    },
    setYouTube(state, id) {
      state.spotify = null;
      state.youtube = id;
    },
    emptyMedia(state) {
      state.spotify = null;
      state.youtube = null;
    }
  }
};

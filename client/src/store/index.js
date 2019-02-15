import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth";
import entries from "./entries";
import media from "./media";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    baseUrl: "/api"
  },
  modules: {
    auth,
    entries,
    media
  },
  mutations: {},
  actions: {}
});

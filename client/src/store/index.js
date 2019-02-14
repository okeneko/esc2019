import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth";
import entries from "./entries";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    baseUrl: "/api"
  },
  modules: {
    auth,
    entries
  },
  mutations: {},
  actions: {}
});

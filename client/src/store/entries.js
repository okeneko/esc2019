import HTTP from "../http";

export default {
  namespaced: true,
  state: {
    entries: []
  },
  actions: {
    async fetchEntries({ commit }) {
      const { data } = await HTTP().get("countries");
      commit("setEntries", data);
      return data;
    }
  },
  mutations: {
    setEntries(state, entries) {
      state.entries = entries;
    }
  }
};

import HTTP from "../http";

export default {
  namespaced: true,
  state: {
    username: null,
    password: null,
    token: null,
    loginError: null
  },
  actions: {
    login({ commit, state }) {
      commit("setLoginError", false);
      return HTTP()
        .post("auth/login", {
          username: state.username,
          password: state.password
        })
        .then(({ data }) => {
          commit("setLoginError", null);
          commit("setToken", data.token);
        })
        .catch(() => {
          commit("setLoginError", "Could not log in.");
        });
    },
    logout({ commit }) {
      commit("setToken", null);
    }
  },
  getters: {
    isLoggedIn(state) {
      return !!state.token;
    }
  },
  mutations: {
    setUsername(state, username) {
      state.username = username;
    },
    setPassword(state, password) {
      state.password = password;
    },
    setToken(state, token) {
      state.token = token;
    },
    setLoginError(state, error) {
      state.loginError = error;
    },
    setNull(state) {
      state.username = null;
      state.password = null;
      state.loginError = null;
    }
  }
};

import { createStore } from 'vuex';

const store = createStore({
  state: {
    username: '',
    userToken: '',
  },
  getters: {
    isUserSignedIn(state) {
      return state.username !== '';
    },
  },
  mutations: {
    setUsername(state, payload) {
      state.username = payload;
    },
    resetUsername(state) {
      state.username = '';
    },
    setUserToken(state, payload) {
      state.userToken = payload;
    },
  },
});

export default store;

import { createStore } from 'vuex';

const store = createStore({
  state: {
    username: '',
  },
  getters: {
    isSignedIn(state) {
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
  },
});

export default store;

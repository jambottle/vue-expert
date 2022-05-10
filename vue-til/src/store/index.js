import { createStore } from 'vuex';

const store = createStore({
  state: {
    username: '',
  },
  mutations: {
    setUsername(state, payload) {
      state.username = payload;
    },
  },
});

export default store;

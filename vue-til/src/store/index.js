import { createStore } from 'vuex';
import { signinUser } from '@/api';
import {
  saveUserToCookie,
  saveAuthToCookie,
  getUserFromCookie,
  getAuthFromCookie,
} from '@/utils/cookies';

const store = createStore({
  state: {
    username: getUserFromCookie() || '',
    userToken: getAuthFromCookie() || '',
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

  actions: {
    async SIGNIN_USER({ commit }, payload) {
      const { data } = await signinUser(payload);
      commit('setUsername', data.user.username);
      commit('setUserToken', data.token);

      saveUserToCookie(data.user.username);
      saveAuthToCookie(data.token);
      return data;
    },
  },
});

export default store;

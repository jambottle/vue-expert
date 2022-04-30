import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
});

function signupUser(payload) {
  return instance.post('signup', payload);
}

function signinUser(payload) {
  return instance.post('login', payload);
}

export { signupUser, signinUser };

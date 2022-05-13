import axios from 'axios';
import { setInterceptors } from '@/api/common/interceptors';

function createInstance() {
  const instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
  });

  return setInterceptors(instance);
}

const instance = createInstance();

function signupUser(payload) {
  return instance.post('signup', payload);
}

function signinUser(payload) {
  return instance.post('login', payload);
}

export { signupUser, signinUser };

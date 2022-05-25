import axios from 'axios';
import { setInterceptors } from '@/api/common/interceptors';

function createInstance() {
  const instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
  });

  return instance;
}

function createInstanceWithAuth(url) {
  const instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL + url,
  });

  return setInterceptors(instance);
}

const instanceForAuth = createInstance();
const instanceForPosts = createInstanceWithAuth('posts');

export { instanceForAuth, instanceForPosts };

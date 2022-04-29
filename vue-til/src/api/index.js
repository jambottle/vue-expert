import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
});

async function signupUser(payload) {
  try {
    return await instance.post('signup', payload);
  } catch (error) {
    console.log(error);
  }
}

async function signinUser(payload) {
  try {
    return await instance.post('login', payload);
  } catch (error) {
    console.log(error);
  }
}

export { signupUser, signinUser };

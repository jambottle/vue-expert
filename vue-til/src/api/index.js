import axios from 'axios';

const config = {
  baseURL: 'http://localhost:3000',
};

async function signupUser(payload) {
  try {
    return await axios.post(`${config.baseURL}/signup`, payload);
  } catch (error) {
    console.log(error);
  }
}

export { signupUser };

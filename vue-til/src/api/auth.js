import { instanceForAuth } from '@/api';

function signupUser(payload) {
  return instanceForAuth.post('signup', payload);
}

function signinUser(payload) {
  return instanceForAuth.post('login', payload);
}

export { signupUser, signinUser };

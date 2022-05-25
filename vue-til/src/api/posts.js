import { instanceForPosts } from '@/api';

function fetchPosts() {
  return instanceForPosts.get('/');
}

function createPost(payload) {
  return instanceForPosts.post('/', payload);
}

export { fetchPosts, createPost };

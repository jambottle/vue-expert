import { instanceForPosts } from '@/api';

function fetchPosts() {
  return instanceForPosts.get('/');
}

function createPost(postData) {
  return instanceForPosts.post('/', postData);
}

function deletePost(postId) {
  return instanceForPosts.delete(postId);
}

export { fetchPosts, createPost, deletePost };

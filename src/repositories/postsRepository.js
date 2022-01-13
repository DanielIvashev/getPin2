import Repository from './repository';

const resource = '/json';
export default {
  get() {
    return Repository.get(`${resource}`);
  },
  get2(params) {
    return Repository.get(`/html`, {
      params: { ...params },
    });
  },

  getPost(postId) {
    return Repository.get(`${resource}/${postId}`);
  },

  createPost(payload) {
    return Repository.post(`${resource}`, payload);
  },
};

import PostsRepository from './postsRepository';

const repositories = {
  posts: PostsRepository,
};

export default {
  get: (name) => repositories[name],
};

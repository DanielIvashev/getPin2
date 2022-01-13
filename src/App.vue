<template>
  <q-btn @click="clickHandler">Button</q-btn>
</template>

<script>
import Repository from '@/repositories/repositoryFactory';

const PostRepository = Repository.get('posts');

export default {
  name: 'App',
  methods: {
    clickHandler() {
      PostRepository.get2();
    },
  },
};
</script>

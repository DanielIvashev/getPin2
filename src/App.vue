<template>
  <component :is="layout" />
</template>

<script>
// import Repository from '@/repositories/repositoryFactory';

// const PostRepository = Repository.get('posts');
import MainLayout from '@/layouts/MainLayout.vue';
import GuestsLayout from '@/layouts/GuestsLayout.vue';

export default {
  name: 'App',
  components: {
    MainLayout,
    GuestsLayout
  },
  data() {
    return {};
  },
  computed: {
    layout() {
      return this.$route.meta.layout || 'main-layout'
    }
  },
  methods: {},
};
</script>

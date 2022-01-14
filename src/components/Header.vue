<template>
  <q-header elevated class="bg-primary text-white header">
    <q-toolbar>
      <q-btn dense flat round icon="menu" @click="toggleDrawer" />
      <q-toolbar-title class="header__logo-wrapper">
        <q-img :src="$options.headerLogo" class="header__logo" />
      </q-toolbar-title>
      <theme-toggle-button />
    </q-toolbar>
  </q-header>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import { defineAsyncComponent } from 'vue';
import headerLogo from '@/assets/images/logo_getpin.png';

export default {
  name: 'Header',
  components: {
    themeToggleButton: defineAsyncComponent(() =>
      import('./ThemeToggleButton.vue')
    ),
  },
  computed: {
    ...mapGetters('navigation', ['getDrawerState', 'getHeaderTitle']),
  },
  headerLogo,
  methods: {
    ...mapMutations('navigation', ['SET_DRAWER_OPEN']),
    toggleDrawer() {
      this.SET_DRAWER_OPEN({ value: !this.getDrawerState });
    },
  },
};
</script>
<style lang="scss" scoped>
@import '@/styles/header.scss';
</style>

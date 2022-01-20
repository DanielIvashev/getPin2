<template>
  <q-drawer v-model="isDrawerOpen" show-if-above side="left" bordered>
    <q-list padding class="menu-list">
      <drawer-menu-item
        v-for="item in getDrawerNavigationItems"
        :content-inset-level="0.5"
        :key="item.id"
        :item="item"
      />
    </q-list>
    <locales-handler />
    <q-btn color="black" label="Logout" @click="logoutHandler"/>
  </q-drawer>
</template>

<script>
import { defineAsyncComponent } from 'vue';
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'Drawer',
  components: {
    drawerMenuItem: defineAsyncComponent(() => import('./DrawerMenuItem.vue')),
    localesHandler: defineAsyncComponent(() => import('./LocalesHandler.vue'))
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters('navigation', ['getDrawerState', 'getDrawerNavigationItems']),
    isDrawerOpen: {
      get() {
        return this.getDrawerState;
      },
      set(event) {
        this.$store.commit('navigation/SET_DRAWER_OPEN', { value: event });
      },
    },
  },
  methods: {
    logoutHandler() {
      this.$store.dispatch('auth/logout')
    }
  },
};
</script>

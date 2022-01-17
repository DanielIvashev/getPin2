<template>
  <q-drawer v-model="isDrawerOpen" show-if-above side="left" bordered>
    <q-list padding class="menu-list">
      <drawer-menu-item
        v-for="item in getDrawerNavigationItems"
        :content-inset-level="0.5"
        :key="item.id"
        :item="item"
      />
      <!-- <q-item clickable v-ripple to="/inbox" exact>
        <q-item-section avatar>
          <q-icon name="inbox" />
        </q-item-section>

        <q-item-section> Inbox </q-item-section>
      </q-item>

      <q-item active clickable v-ripple>
        <q-item-section avatar>
          <q-icon name="star" />
        </q-item-section>

        <q-item-section> Star </q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-icon name="send" />
        </q-item-section>

        <q-item-section> Send </q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-icon name="drafts" />
        </q-item-section>

        <q-item-section> Drafts </q-item-section>
      </q-item> -->
    </q-list>
  </q-drawer>
</template>

<script>
import { defineAsyncComponent } from 'vue';
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'Drawer',
  components: {
    drawerMenuItem: defineAsyncComponent(() => import('./DrawerMenuItem.vue')),
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
        this.SET_DRAWER_OPEN({ value: event });
      },
    },
  },
  methods: {
    ...mapMutations('navigation', ['SET_DRAWER_OPEN']),
  },
};
</script>

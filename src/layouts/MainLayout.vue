<template>
  <q-layout view="lHh lpR fFf">
    <custom-header />
    <drawer />
    <q-page-container>
      <q-page padding>
        <router-view v-slot="{ Component }">
          <transition name="router" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
  name: 'MainLayout',
  components: {
    drawer: defineAsyncComponent(() => import('../components/Drawer.vue')),
    customHeader: defineAsyncComponent(() =>
      import('../components/Header.vue')
    ),
  },
  data() {
    return {};
  },
  mounted () {

  }
};
</script>

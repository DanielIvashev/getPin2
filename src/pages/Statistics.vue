<template>
  <div>
    <chart />
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
  name: 'Statistics',
  components: {
    Chart: defineAsyncComponent(() => import('../components/Chart.vue')),
  },
  methods: {
    test () {
      console.log(1);
    },
  },
};
</script>

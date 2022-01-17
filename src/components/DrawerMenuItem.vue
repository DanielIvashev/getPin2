<template>
  <q-expansion-item
    v-if="itemHasChildren"
    :content-inset-level="contentInsetLevel"
    :icon="item.icon"
    :label="item.label"
    :to="item.to"
    :tag="item.tag || 'div'"
  >
    <drawer-menu-item
      v-for="subitem in item.children"
      :content-inset-level="0.5"
      :key="subitem.id"
      :item="subitem"
    />
  </q-expansion-item>
  <q-item v-else clickable v-ripple :to="item.to" :tag="item.tag || 'div'">
    <q-item-section v-if="item.icon" avatar>
      <q-icon :name="item.icon" />
    </q-item-section>
    <q-item-section> {{ item.label }} </q-item-section>
  </q-item>
</template>

<script>
export default {
  name: 'DrawerMenuItem',
  props: {
    item: {
      required: true,
      type: Object,
    },
    contentInsetLevel: {
      type: Number,
      default: 0.5,
    },
  },
  computed: {
    itemHasChildren() {
      return this.item.children && this.item.children.length;
    },
  },
};
</script>

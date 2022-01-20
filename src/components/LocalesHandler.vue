<template>
  <div style='position: relative; display: flex; justify-content: center'>
    <q-btn-toggle
      v-model="locale"
      toggle-color="primary"
      :options="[
        {label: 'EN', value: 'en'},
        {label: 'RU', value: 'ru'},
      ]"
    />
    <q-inner-loading :showing="loaderVisible">
      <q-spinner-gears size="50px" color="primary" />
    </q-inner-loading>
  </div>
</template>

<script>
export default {
  name: 'LocalesHandler',
  computed: {
    loaderVisible() {
      return this.$store.getters['isLocaleChanging'];
    },
    locale: {
      get() {
        return this.$store.getters['getLocale'];
      },
      set(locale) {
        this.$store.dispatch('setLocale', { locale })
      }
    }
  }
}
</script>
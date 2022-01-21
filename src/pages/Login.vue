<template>
  <div class='login'>
    <div class='login__wrapper'>
      <h4 class='login__title'>{{ $t('messages.authorization') }}</h4>
      <q-card class="my-card">
        <q-card-section>
          <q-form
            class="q-gutter-md"
          >
            <q-input
              filled
              v-model="name"
              label="Your name *"
              hint="Name and surname"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Please type something']"
            />
            <q-input
              filled
              v-model="age"
              label="Your age *"
              hint="your age"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Please type something']"
            />
            <div>
              <q-btn label="Submit" type="submit" color="primary"/>
              <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
            </div>
          </q-form>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
import { createHelpers } from 'vuex-map-fields';
const { mapFields } = createHelpers({
  getterType: 'auth/getField',
  mutationType: 'auth/updateField',
});
export default {
  name: 'Login',
  computed: {
    ...mapFields(['name', 'age']),
    loginForm () {
      return this.$store.getters['auth/loginForm'] || {};
    },
    // age: {
    //   get () {
    //     return this.loginForm.age;
    //   },
    //   set (value) {
    //     this.$store.commit('auth/CHANGE_FIELD', { fieldName: 'age', value })
    //   }
    // },
    // name: {
    //   get () {
    //     return this.loginForm.name;
    //   },
    //   set (value) {
    //     this.$store.commit('auth/CHANGE_FIELD', { fieldName: 'name', value })
    //   }
    // }
  }
}
</script>
<style lang='scss' scoped>
@import '@/styles/login';
</style>
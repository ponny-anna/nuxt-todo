<template>
  <div class="box has-text-centered">
    <h2>Sign in</h2>
    <b-button type="is-danger" @click="login">Google Login</b-button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions('user', [
      'login'
    ])
  }
}
</script>

<style scoped>
/* Fonts */
@import url(https://fonts.googleapis.com/css?family=Open+Sans:400);

/* fontawesome */
@import url(http://weloveiconfonts.com/api/?family=fontawesome);
[class*="fontawesome-"]:before {
  font-family: 'FontAwesome', sans-serif;
}

/* Form Layout */
.form-wrapper {
  background: #fafafa;
  margin: 3em auto;
  padding: 0 1em;
  max-width: 370px;
}

h2 {
  text-align: center;
  padding: 1em 0;
}

</style>

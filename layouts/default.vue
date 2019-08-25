<template>
  <div>
    <b-navbar type="is-dark">
      <template slot="brand">
        <b-navbar-item href="/">
          <h1 class="logo">Nuxt Todo</h1>
        </b-navbar-item>
      </template>
      <template slot="start">
        <b-navbar-item href="/">Home</b-navbar-item>
        <b-navbar-item href="/todos" v-if="login_user">Todo</b-navbar-item>
      </template>

      <template slot="end">
        <b-navbar-item tag="div">
          <div class="buttons">
            <div v-if="login_user === null">
              <a href="/signup" class="button is-primary">
                <strong>Sign up</strong>
              </a>
            </div>
            <div v-else>
              <div>
                <a @click="logout" class="button is-primary">
                  <strong>Log out</strong>
                </a>
              </div>
            </div>
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>
    <div class="container column is-10">
      <nuxt />
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  created () {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setLoginUser(user)
        if (this.$router.currentRoute.name === 'signup') {
          this.$router.push({ name: 'todos' })
        }
      } else {
        this.deleteLoginUser()
        if (this.$router.currentRoute.name === 'todos') {
          this.$router.push({ name: 'signup' })
        }
      }
    })
  },
  computed: {
    ...mapState('user', [
      'login_user'
    ]),
    ...mapGetters('user', [
      'userName'
    ])
  },
  methods: {
    ...mapActions('user', [
      'setLoginUser', 'deleteLoginUser', 'logout'
    ])
  }
}
</script>

<style scoped>
.logo {
  padding: 10px;
  font-family: 'Vidaloka', serif;
  text-align: center;
  font-weight: normal;
  color: #fff;
  font-size: 24px;
  line-height: 24px;
  text-shadow: 2px 2px 4px #aaa;
  display: block;
}
</style>

import firebase from '~/plugins/firebase'

export const state = () => ({
  login_user: null
})

export const mutations = {
  setLoginUser (state, user) {
    state.login_user = user
  },
  deleteLoginUser (state) {
    state.login_user = null
  }
}

export const actions = {
  login ({ commit }) {
    const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithRedirect(googleAuthProvider)
  },
  setLoginUser ({ commit }, user) {
    commit('setLoginUser', user)
  },
  deleteLoginUser ({ commit }) {
    commit('deleteLoginUser')
  },
  logout () {
    firebase.auth().signOut()
  }
}

export const getters = {
  userName: state => state.login_user ? state.login_user.displayName : ''
}

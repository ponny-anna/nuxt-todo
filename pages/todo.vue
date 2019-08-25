<template>
  <div>
    <p>Todo</p>
    {{ userName }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('user', [
      'userName'
    ])
  }
}
</script>

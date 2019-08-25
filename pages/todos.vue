<template>
  <div>
    <table>
      <thead v-pre>
        <tr>
          <th>済</th>
          <th>タスク名</th>
          <th>時刻</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="todo in todos" :key="todo.id" v-bind:class="{ done: todo.done}">
          <td>
            <b-checkbox v-model="todo.done" @chenge="toggle(todo)"></b-checkbox>
          </td>
          <td>{{ todo.name }}</td>
          <td>{{ todo.created.toDate | dateFilter }}</td>
          <td>
            <b-button type="is-danger" icon-right="delete" @click="remove(todo.id)"></b-button>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="form">
      <form v-on:submit.prevent="add">
        <b-input v-model="name"></b-input>
        <b-button type="is-info">Add</b-button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import moment from 'moment'

export default {
  data () {
    return {
      name: ''
    }
  },
  created () {
    this.$store.dispatch('todos/init')
  },
  methods: {
    add () {
      this.$store.dispatch('todos/add', this.name)
      this.name = ''
    },
    remove (id) {
      this.$store.dispatch('todos/remove', id)
    },
    toggle (todo) {
      this.$store.dispatch('todos/toggle', todo)
    }
  },
  computed: {
    todos () {
      return this.$store.getters['todos/orderdTodos']
    },
    ...mapGetters('user', [
      'userName'
    ])
  },
  filters: {
    dateFilter: (date) => {
      return moment(date).format('YYYY/MM/DD HH:mm:ss')
    }
  }
}
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}
thead th {
  border-bottom: 2px solid #0099e4; /*#d31c4a */
  color: #0099e4;
}
th,
th {
  padding: 0 8px;
  line-height: 40px;
}
thead th.id {
  width: 50px;
}
thead th.state {
  width: 100px;
}
thead th.button {
  width: 60px;
}
tbody td.button, tbody td.state {
  text-align: center;
}
tbody tr td,
tbody tr th {
  border-bottom: 1px solid #ccc;
  transition: all 0.4s;
}
tbody tr.done td,
tbody tr.done th {
  background: #f8f8f8;
  color: #bbb;
}
tbody tr:hover td,
tbody tr:hover th {
  background: #f4fbff;
}

.form {
  margin-top: 50px;
}
</style>

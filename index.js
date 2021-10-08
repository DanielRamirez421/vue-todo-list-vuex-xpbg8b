import Vue from 'vue';
import Vuex from 'vuex';

import store from './store';

new Vue({
  el: '#app',
  store,
  computed: {
    items() {
      return this.$store.state.todos
    }
  },
  data() {
    return {
      newTodo: '',
    };
  },
  template: `
  <div>
    <ul>
      <li v-for="(todo,index) in items">
        {{ todo.message }}
        <button @click="removeTodoByIndex(index)">delete</button>
      </li>
    </ul>
    <div>
      <label for="newtodo">Add a new Todo:</label>
      <input id="newTodo" name="newTodo" type="text" v-model="newTodo" />
      <button @click="addTodo">Add</button>
    </div>
  </div>
  `,
  methods: {
    addTodo() {
      this.$store.dispatch('addTodo', this.newTodo);
      this.newTodo = '';
    },
    removeTodoByIndex(todo) {
      this.$store.dispatch('removeTodoByIndex', todo);
    }
  }
})
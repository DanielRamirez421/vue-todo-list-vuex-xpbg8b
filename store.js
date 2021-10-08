import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    todos: [
      {
        message: 'Task Thingy',
        date: 1565370205354,
        checked: false,
        trashed: false,
      },
      {
        message: 'Another Task',
        date: 1565370213536,
        checked: false,
        trashed: false,
      }
    ],
  },
  actions: {
    addTodo(context, todoMessage) {
      context.commit('addTodo', todoMessage);
    },
    removeTodoByIndex(context, index) {
      context.commit('removeTodoByIndex', index);
    }
  },
  mutations: {
    addTodo(state, todoMessage) {
      state.todos.push({
        message: todoMessage,
        date: Date.now(),
        checked: false,
        trashed: false,
      });
    },
    removeTodoByIndex(state, index) {
      state.todos.splice(index, 1);
    }
  }
})

export default store;
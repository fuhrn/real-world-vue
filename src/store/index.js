import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: { id: 'abc123', name: 'Adam Jahr'},
    categories: [
      'sustainability',
      'nature',
      'animal welfare',
      'housing',
      'education',
      'food',
      'community'
    ],
    todos: [
      {id:1, text: '.....', done: true},
      {id:1, text: '.....', done: false},
      {id:1, text: '.....', done: true},
      {id:1, text: '.....', done: true},
    ],
    events: [
      {id:1, title: '.....', organizer: true},
      {id:2, title: '.....', organizer: true},
      {id:3, title: '.....', organizer: true},
      {id:4, title: '.....', organizer: true},
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    catLength: state => {
      return state.categories.length
    },
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    activeTodosCount: (state) => {
      // return state.todos.length - getters.doneTodos.length
      return state.todos.filter(todo => !todo.done).length // no necesito pasar getters a activeTodosCoutn
    },
    getEventById: state => id => {
      return state.events.find(event => event.id === id)
    }
  },

  modules: {}
});

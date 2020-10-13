import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    lists: [
      {
        name: 'Life Style',
        currentlySelected: true,
        listItems: [
            {
                task: 'Go for a walk',
                importance: false,
                isDone: false,
                id: 1
            },
            {
                task: 'Drink',
                importance: false,
                isDone: false,
                id: 2
            },
            {
                task: 'Do something else',
                importance: true,
                isDone: true,
                id: 3
            },
            {
                task: 'Test task name',
                importance: false,
                isDone: true
            },
        ]
    },
    {
      name: 'Idea',
      currentlySelected: false,
      listItems: [
          {
              task: 'Go for a walk',
              importance: false,
              isDone: true,
              id: 1
          },
          {
              task: 'Drink',
              importance: false,
              isDone: false,
              id: 2
          },
          {
              task: 'Do something else',
              importance: true,
              isDone: true,
              id: 3
          },
          {
              task: 'Test task name',
              importance: false,
              isDone: true
          },
      ]
  },
    ]
  },
  getters: {
    getAllLists(state) {
      return state.lists
    }
  },
  actions: {
    selectList({ commit }, selected = 'Life Style') {
      commit('selectList', selected)
      console.log('b ' + this.currentlySelected)
    }
  },
  mutations: {
    selectList(state, selected) {
      state.currentlySelected = selected
      console.log('a ' + selected)
    }
  },
  modules: {}
});

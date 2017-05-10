import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// root state object.
// each Vuex instance is just a single state tree.
const state = {
  projects: [
    { '.key': 1, name: 'Projet 1', client: { '.key': 2, name: 'Client 2' } },
    { '.key': 2, name: 'Projet 2', client: { '.key': 3, name: 'Client 3' } },
    { '.key': 3, name: 'Projet 3', client: { '.key': 4, name: 'Client 4' } },
    { '.key': 4, name: 'Projet 4', client: { '.key': 1, name: 'Client 1' } }
    // { '.key': 5, name: 'Projet 5' },
    // { '.key': 6, name: 'Projet 6' },
    // { '.key': 7, name: 'Projet 7' },
    // { '.key': 8, name: 'Projet 8' },
    // { '.key': 9, name: 'Projet 9' },
    // { '.key': 10, name: 'Projet 10' },
    // { '.key': 11, name: 'Projet 11' },
    // { '.key': 12, name: 'Projet 12' },
    // { '.key': 13, name: 'Projet 13' },
    // { '.key': 14, name: 'Projet 14' },
    // { '.key': 15, name: 'Projet 15' }
  ],
  clients: [
    { '.key': 1, name: 'Client 1' },
    { '.key': 2, name: 'Client 2' },
    { '.key': 3, name: 'Client 3' },
    { '.key': 4, name: 'Client 4' }
  ]
}

// mutations are operations that actually mutates the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations = {
  updateProject (state, { project, name, client }) {
    project.name = name
    project.client = client
  },
  addProject (state, { name, client }) {
    state.projects.push({
      name, client
    })
  },
  deleteProject (state, { project }) {
    state.projects.splice(state.projects.indexOf(project), 1)
  },
  addClient (state, { name }) {
    state.clients.push({
      name
    })
  }
}

// actions are functions that causes side effects and can involve
// asynchronous operations.
const actions = {
  // increment: ({ commit }) => commit('increment'),
  // decrement: ({ commit }) => commit('decrement'),
  // incrementAsync ({ commit }) {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       commit('increment')
  //       resolve()
  //     }, 1000)
  //   })
  // }
}

// getters are functions
const getters = {
  // evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd'
}

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})

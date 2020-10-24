export default {
  state: () => ({
    demo: false,
    loaded: false
  }),
  getters: {
    active(state) {
      return state.demo
    },
    loaded(state) {
      return state.loaded
    }
  },
  mutations: {
    SET_DEMO_ACTIVE(state, value) {
      state.demo = value
    },
    SET_DEMO_LOADED(state, value) {
      state.loaded = value
    }
  }
}
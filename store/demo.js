export default {
  state: () => ({
    demo: false
  }),
  getters: {
    active(state) {
      return state.demo
    }
  },
  mutations: {
    SET_DEMO(state, value) {
      state.demo = value
    }
  }
}
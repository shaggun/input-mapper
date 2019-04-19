import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    x1: 0,
    x2: 1,
    y1: 0,
    y2: 1
  },
  mutations: {
    setPoints(state, payload) {
      state.x1 = payload.x1;
      state.x2 = payload.x2;
      state.y1 = payload.y1;
      state.y2 = payload.y2;
    }
  },
  getters: {
    points(state) {
      return state;
    }
  }
});

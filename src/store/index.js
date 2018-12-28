import Vue from 'vue';
import Vuex from 'vuex';
import { SOME_MUTATION } from './mutation-types';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
  },
  mutations: {
    [SOME_MUTATION](state, payload) {
      state.count += payload.amount;
    },
  },
  actions: {},
});

import Vue from 'vue';
import Vuex, { MutationTree } from 'vuex';

Vue.use(Vuex);

export enum MutationTypes {
  UPDATE = 'UPDATE',
}

const state = {
  tags: ['food', 'sport'],
};

export type State = typeof state;

export interface Mutations<S = State> {
  [MutationTypes.UPDATE](state: S, tags: string[]): void;
}

export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.UPDATE](s, tags: string[]) {
    s.tags = tags;
  },
};

export default new Vuex.Store({
  state,
  mutations: {
    [MutationTypes.UPDATE](s, tags: string[]) {
      s.tags = tags;
    },
  },
  actions: {
    updateTags: ({ commit }, tags: string[]) => {
      commit('UPDATE', tags);
    },
  },
});

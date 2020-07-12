import Vue from 'vue';
import Vuex, { MutationTree, GetterTree, StoreOptions } from 'vuex';

Vue.use(Vuex);

export enum MutationTypes {
  UPDATE = 'UPDATE',
}

const state = {
  tags: ['food', 'sport'],
};

export type RootState = typeof state;

export interface Mutations<S = RootState> {
  [MutationTypes.UPDATE](state: S, tags: string[]): void;
}

export const mutations: MutationTree<RootState> & Mutations = {
  [MutationTypes.UPDATE](s, tags: string[]) {
    s.tags = tags;
  },
};

const store: StoreOptions<RootState> = {
  state,
  mutations,
  actions: {
    updateTags: ({ commit }, tags: string[]) => {
      commit('UPDATE', tags);
    },
  },
};



export default new Vuex.Store<RootState>(store);

import api from '@services/api';

const initial_state = {
  popular: [],
};

export default {
  namespaced: true,
  state: () => initial_state,
  mutations: {
    SET_POPULAR(state, payload) {
      state.popular = payload.map(movie => ({
        ...movie,
        poster_path: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      }));
    },
  },
  actions: {
    async getPopular({ commit }) {
      const { data } = await api.get('/movie/popular', { group: 'streaming' });
      commit('SET_POPULAR', data.results);
    },
  },
  getters: {
    popular: state => state.popular,
  },
};

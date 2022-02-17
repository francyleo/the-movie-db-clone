import api from '@services/api';

const initial_state = {
  movies: {
    adventure: [],
    action: [],
    horror: [],
    comedy: [],
    family: [],
    fantasy: [],
    war: [],
  },
};

export default {
  namespaced: true,
  state: () => initial_state,
  mutations: {
    SET_MOVIE(state, { gender, payload }) {
      state.movies[gender] = payload.map(movie => ({
        ...movie,
        poster_path: `https://image.tmdb.org/t/p/w185${movie.poster_path}`,
      }));
    },
  },
  actions: {
    async getPopular({ commit }) {
      // mock genders
      const genders = [
        {
          id: 12,
          name: 'adventure',
        },
        {
          id: 28,
          name: 'action',
        },
        {
          id: 27,
          name: 'horror',
        },
        {
          id: 35,
          name: 'comedy',
        },
        {
          id: 10751,
          name: 'family',
        },
        {
          id: 14,
          name: 'fantasy',
        },
        {
          id: 10752,
          name: 'war',
        },
      ];

      for (let gender of genders) {
        const { data } = await api.get('/movie/popular', {
          with_genres: gender.id,
        });

        commit('SET_MOVIE', {
          gender: gender.name,
          payload: data.results,
        });
      }
    },
  },
  getters: {
    movies: state => state.movies,
  },
};

import axios from 'axios';

class Api {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.VUE_APP_THE_MOVIE_DB_API_BASE_URI,
      params: {
        api_key: process.env.VUE_APP_THE_MOVIE_DB_API_KEY,
      },
    });
  }

  get(url, params) {
    return this.api.get(url, { params });
  }
}

export default new Api();

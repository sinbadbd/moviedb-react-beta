import {
  SEARCH_BASE_URL,
  POPULAR_BASE_URL,
  API_URL,
  API_KEY,
  REQUEST_TOKEN_URL,
  LOGIN_URL,
  SESSION_ID_URL,
  ALL_MOVIES_BASE_URL,
  getMovieURL,
  getkeywordMovies,
} from "./Config";

const defaultConfig = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

const apiSettings = {
  fetchMovies: async (searchTerm, page) => {
    const endpoint = searchTerm
      ? `${SEARCH_BASE_URL}${searchTerm}&page=${page}`
      : `${POPULAR_BASE_URL}&page=${page}`;
    return await (await fetch(endpoint)).json();
  },
  fetchMovie: async (movieId) => {
    const endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;
    return await (await fetch(endpoint)).json();
  },

  fetchAllMovies: async (page) => {
    const endpoint = `${ALL_MOVIES_BASE_URL}&page=${page}`;
    return await (await fetch(endpoint)).json();
  },

  fetchAllTypeMovies: async (type, page) => {
    const endpoint = `${getMovieURL(type, page)}`;
    return await (await fetch(endpoint)).json();
  },

  fetchCredits: async (movieId) => {
    const creditsEndpoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
    return await (await fetch(creditsEndpoint)).json();
  },

  fetchKeywords: async (movieId) => {
    const creditsEndpoint = `${API_URL}movie/${movieId}/keywords?api_key=${API_KEY}`;
    return await (await fetch(creditsEndpoint)).json();
  },
  fetchVideos: async (movieId) => {
    const creditsEndpoint = `${API_URL}movie/${movieId}/videos?api_key=${API_KEY}`;
    return await (await fetch(creditsEndpoint)).json();
  },
  fetchImages: async (movieId) => {
    const creditsEndpoint = `${API_URL}movie/${movieId}/images?api_key=${API_KEY}`;
    return await (await fetch(creditsEndpoint)).json();
  },

  fetchKeywordsMovies: async (keywordId) => {
    const endpoint = `${getkeywordMovies(keywordId)}`;
    console.log(endpoint)
    return await (await fetch(endpoint)).json();
  },

  // MOVIE ACTOR: PERSON ALL API CALL
  fetchPerson: async (personId) => {
    const personEndpoint = `${API_URL}person/${personId}?api_key=${API_KEY}`;
    return await (await fetch(personEndpoint)).json();
  },
  fetchPersonImage: async (personId) => {
    const personEndpoint = `${API_URL}person/${personId}/images?api_key=${API_KEY}`;
    return await (await fetch(personEndpoint)).json();
  },
  fetchPersonchanges: async (personId) => {
    const personEndpoint = `${API_URL}person/${personId}/changes?api_key=${API_KEY}`;
    return await (await fetch(personEndpoint)).json();
  },
  fetchPersonmovieCredits: async (personId) => {
    const personEndpoint = `${API_URL}person/${personId}/movie_credits?api_key=${API_KEY}`;
    return await (await fetch(personEndpoint)).json();
  },
  fetchPersontvCredits: async (personId) => {
    const personEndpoint = `${API_URL}person/${personId}/2?api_key=${API_KEY}`;
    return await (await fetch(personEndpoint)).json();
  },
  fetchPersoncombinedCredits: async (personId) => {
    const personEndpoint = `${API_URL}person/${personId}/combined_credits?api_key=${API_KEY}`;
    return await (await fetch(personEndpoint)).json();
  },
  fetchPersonexternalIds: async (personId) => {
    const personEndpoint = `${API_URL}person/${personId}/external_ids?api_key=${API_KEY}`;
    return await (await fetch(personEndpoint)).json();
  },
  fetchPersontaggedImages: async (personId) => {
    const personEndpoint = `${API_URL}person/${personId}/tagged_images?api_key=${API_KEY}`;
    return await (await fetch(personEndpoint)).json();
  },
  fetchPersonTranslations: async (personId) => {
    const personEndpoint = `${API_URL}person/${personId}/translations?api_key=${API_KEY}`;
    return await (await fetch(personEndpoint)).json();
  },

  fetchPersonLatest: async (personId) => {
    const personEndpoint = `${API_URL}person/${personId}/latest?api_key=${API_KEY}`;
    return await (await fetch(personEndpoint)).json();
  },

  fetchPersonPopular: async (personId) => {
    const personEndpoint = `${API_URL}person/${personId}/popular?api_key=${API_KEY}`;
    return await (await fetch(personEndpoint)).json();
  },

  // Bonus material below for login
  getRequestToken: async () => {
    const reqToken = await (await fetch(REQUEST_TOKEN_URL)).json();
    return reqToken.request_token;
  },
  authenticate: async (requestToken, username, password) => {
    const bodyData = {
      username,
      password,
      request_token: requestToken,
    };
    // First authenticate the requestToken
    const data = await (
      await fetch(LOGIN_URL, {
        ...defaultConfig,
        body: JSON.stringify(bodyData),
      })
    ).json();
    // Then get the sessionId with the requestToken
    if (data.success) {
      const sessionId = await (
        await fetch(SESSION_ID_URL, {
          ...defaultConfig,
          body: JSON.stringify({ request_token: requestToken }),
        })
      ).json();
      return sessionId;
    }
  },
  rateMovie: async (sessionId, movieId, value) => {
    const endpoint = `${API_URL}movie/${movieId}/rating?api_key=${API_KEY}&session_id=${sessionId}`;

    const rating = await (
      await fetch(endpoint, {
        ...defaultConfig,
        body: JSON.stringify({ value }),
      })
    ).json();

    return rating;
  },
};

export default apiSettings;

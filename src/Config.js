
const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'de05a59a85ef1e7797de8d4a6d343d0e'//process.env.APP_API_KEY

const SEARCH_BASE_URL = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=`;
const POPULAR_BASE_URL = `${API_URL}movie/popular?api_key=${API_KEY}`
const ALL_MOVIES_BASE_URL = `${API_URL}movie/now_playing?api_key=${API_KEY}`
 

// ALL TOP MOVIES: TOP, UPCOMMING, NOW PLAY
const getMovieURL = (movieType, page) => {
    const url =  `${API_URL}movie/${movieType}?api_key=${API_KEY}&page=${page}`
    return url;
}

// keyword movies
const getkeywordMovies = (keywordid) => {
    const url =  `${API_URL}keyword/${keywordid}/movies?api_key=${API_KEY}`
    console.log(url)
    return url;
}
 
// 
const REQUEST_TOKEN_URL = `${API_URL}`
const LOGIN_URL = `${API_URL}`
const SESSION_ID_URL = `${API_URL}`


//Image URL
const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/';

const BACKDROP_SIZE = 'w1280'

const POSTER_SIZE = 'w780';


export{
    SEARCH_BASE_URL,
    POPULAR_BASE_URL,
    API_URL,
    API_KEY,
    REQUEST_TOKEN_URL,
    LOGIN_URL,
    SESSION_ID_URL,
    IMAGE_BASE_URL,
    BACKDROP_SIZE,
    POSTER_SIZE,
    ALL_MOVIES_BASE_URL,
    getMovieURL,
    getkeywordMovies
}
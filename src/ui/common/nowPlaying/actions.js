import axios from 'axios';
import { NOW_PLAYING_REQUEST, NOW_PLAYING_RECEIVED, NOW_PLAYING_ERROR } from './constants';

function requestNowPlaying() {
  return {
    type: NOW_PLAYING_REQUEST,
  };
}
function receiveNowPlaying(json) {
  return {
    type: NOW_PLAYING_RECEIVED,
    result: json.data,
  };
}
function errorNowPlaying(error) {
  return {
    type: NOW_PLAYING_ERROR,
    error
  };
}
export default function fetchMovieNowPlaying(page) {
  return dispatch => {
    dispatch(requestNowPlaying());
    return axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=af2063829763f377ee050b667f4d0894&language=en-US&page=${page}`)
      .then((result) => {
        dispatch(receiveNowPlaying(result));
        return result;
      }).catch((error) => {
        dispatch(errorNowPlaying(error));
      });
  };
}

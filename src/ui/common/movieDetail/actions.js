import axios from 'axios';
import { MOVIE_DETAIL_REQUEST, MOVIE_DETAIL_RECEIVED, MOVIE_DETAIL_ERROR } from './constants';

function requestMovieDetail() {
  return {
    type: MOVIE_DETAIL_REQUEST,
  };
}
function receiveMovieDetail(json) {
  return {
    type: MOVIE_DETAIL_RECEIVED,
    result: json.data,
  };
}
function errorMovieDetail(error) {
  return {
    type: MOVIE_DETAIL_ERROR,
    error
  };
}
export default function fetchMovieDetail(params) {
  console.log('params', params);
  return dispatch => {
    dispatch(requestMovieDetail());
    return axios.get(`https://api.themoviedb.org/3/movie/${params}?api_key=af2063829763f377ee050b667f4d0894&language=en-US`)
      .then((result) => {
        console.log('result', result);
        dispatch(receiveMovieDetail(result));
        return result;
      }).catch((error) => {
        dispatch(errorMovieDetail(error));
      });
  };
}

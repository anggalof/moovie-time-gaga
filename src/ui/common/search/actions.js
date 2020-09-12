import axios from 'axios';
import { SEARCH_REQUEST, SEARCH_RECEIVED, SEARCH_ERROR } from './constants';

function requestSearch() {
  return {
    type: SEARCH_REQUEST,
  };
}
function receiveSearch(json) {
  return {
    type: SEARCH_RECEIVED,
    result: json.data,
  };
}
function errorSearch(error) {
  return {
    type: SEARCH_ERROR,
    error
  };
}
export default function fetchSearch(query) {
  return dispatch => {
    dispatch(requestSearch());
    return axios.get(`https://api.themoviedb.org/3/search/movie?api_key=af2063829763f377ee050b667f4d0894&query=${query}&language=en-US&page=1`)
      .then((result) => {
        dispatch(receiveSearch(result));
        return result;
      }).catch((error) => {
        dispatch(errorSearch(error));
      });
  };
}

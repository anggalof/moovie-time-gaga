import axios from 'axios';
import { NEWS_REQUEST, NEWS_RECEIVED, NEWS_ERROR } from './constants';

function requestNews() {
  return {
    type: NEWS_REQUEST,
  };
}
function receiveNews(json) {
  return {
    type: NEWS_RECEIVED,
    result: json.data,
  };
}
function errorNews(error) {
  return {
    type: NEWS_ERROR,
    error
  };
}
export default function fetchNews(page) {
  return dispatch => {
    dispatch(requestNews());
    return axios.get('https://newsapi.org/v2/top-headlines?sources=cnn&apiKey=2e8c56add05d45cbb1d60d528a532e73')
      .then((result) => {
        dispatch(receiveNews(result));
        return result;
      }).catch((error) => {
        dispatch(errorNews(error));
      });
  };
}

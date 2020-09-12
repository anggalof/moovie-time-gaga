import {
  MOVIE_DETAIL_REQUEST,
  MOVIE_DETAIL_RECEIVED,
  MOVIE_DETAIL_ERROR,
} from './constants';
  
  function reducer(state = {
    isFetching: false,
    items: {},
    status: '',
  }, action) {
      switch (action.type) {
        case MOVIE_DETAIL_REQUEST:
          return {
            ...state,
            isFetching: true,
            status: 'request'
          };
        case MOVIE_DETAIL_RECEIVED:
          return {
            isFetching: false,
            items: {
              data: action.result,
            },
            status: 'receiving'
          };
        case MOVIE_DETAIL_ERROR:
          return {
            ...state,
            isFetching: false,
            status: action.error
          };
        default:
          return state;
      }
  }
  export default reducer;
  
  
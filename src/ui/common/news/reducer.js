import {
  NEWS_REQUEST,
  NEWS_RECEIVED,
  NEWS_ERROR,
} from './constants';
  
  function reducer(state = {
    isFetching: false,
    items: {},
    status: '',
  }, action) {
      switch (action.type) {
        case NEWS_REQUEST:
          return {
            ...state,
            isFetching: true,
            status: 'request'
          };
        case NEWS_RECEIVED:
          return {
            isFetching: false,
            items: {
              data: action.result,
            },
            status: 'receiving'
          };
        case NEWS_ERROR:
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
  
  
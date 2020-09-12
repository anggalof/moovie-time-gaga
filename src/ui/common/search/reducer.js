import {
  SEARCH_REQUEST,
  SEARCH_RECEIVED,
  SEARCH_ERROR,
} from './constants';
  
  function reducer(state = {
    isFetching: false,
    items: {},
    status: '',
  }, action) {
      switch (action.type) {
        case SEARCH_REQUEST:
          return {
            ...state,
            isFetching: true,
            status: 'request'
          };
        case SEARCH_RECEIVED:
          return {
            isFetching: false,
            items: {
              data: action.result,
            },
            status: 'receiving'
          };
        case SEARCH_ERROR:
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
  
  
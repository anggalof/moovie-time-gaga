import {
  NOW_PLAYING_REQUEST,
  NOW_PLAYING_RECEIVED,
  NOW_PLAYING_ERROR,
} from './constants';
  
  function reducer(state = {
    isFetching: false,
    items: {},
    status: '',
  }, action) {
      switch (action.type) {
        case NOW_PLAYING_REQUEST:
          return {
            ...state,
            isFetching: true,
            status: 'request'
          };
        case NOW_PLAYING_RECEIVED:
          return {
            isFetching: false,
            items: {
              data: action.result,
            },
            status: 'receiving'
          };
        case NOW_PLAYING_ERROR:
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
  
  
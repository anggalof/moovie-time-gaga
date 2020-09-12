import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import nowPlaying from './ui/common/nowPlaying/reducer';
import news from './ui/common/news/reducer';
import search from './ui/common/search/reducer';
import movieDetail from './ui/common/movieDetail/reducer';

const rootReducer = combineReducers({
  nowPlaying,
  news,
  search,
  movieDetail,
  form: formReducer,
});

export default rootReducer;

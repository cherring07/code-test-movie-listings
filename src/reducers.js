import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import moviesReducer from './containers/pages/Movies/reducer';

const rootReducer = combineReducers({
  moviesReducer,
  form,
});

export default rootReducer;

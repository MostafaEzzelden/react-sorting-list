import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import sortReducer from './sortReducer';

export default combineReducers({
  sort: sortReducer,
  form: reduxForm,
});
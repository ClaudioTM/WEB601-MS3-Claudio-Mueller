import authReducer from './authReducer';
import commentReducer from './commentReducer'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  commentReducer,
  authReducer,
});

export default rootReducer;
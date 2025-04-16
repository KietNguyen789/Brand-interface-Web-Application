import { combineReducers } from 'redux';
import { authReducer } from './sliceAuth';

export const rootReducer = combineReducers({
  auth: authReducer,
});

import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../_reducers';

let mStore;

const initialState = {};

export const createNewStore = state => createStore(
  rootReducer,
  state,
  composeWithDevTools(applyMiddleware(thunkMiddleware)),
);

const store = (state = initialState) => {
  if (!mStore) {
    mStore = createNewStore(state);
  }

  return mStore;
};

export default store;

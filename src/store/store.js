import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import reduxLogger from 'redux-logger';
import rootReducers from './reducers/rootReducer';

const store = (reducers = {}, preLoadedState = {}, middLewares = []) =>
  createStore(
    combineReducers({
      ...rootReducers,
      ...reducers,
    }),
    preLoadedState,
    compose(applyMiddleware(...middLewares, thunk, reduxLogger))
  );

export default store;

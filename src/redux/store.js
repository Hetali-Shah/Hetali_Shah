import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose
} from 'redux';
import {
  routeIndex,
} from './reducers';

const store = createStore(
  combineReducers({
    routeIndex,
  }),
  undefined,
  compose(applyMiddleware())
);

export default store;

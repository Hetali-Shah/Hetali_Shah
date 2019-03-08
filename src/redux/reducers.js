import {
  ROUTE_INDEX_SET,
} from './actions';

export const routeIndex = (state = 0, action) => {
  switch (action.type) {
    case ROUTE_INDEX_SET:
      return action.state;

    default:
      return state;
  }
};


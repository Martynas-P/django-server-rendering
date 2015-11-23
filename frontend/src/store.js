const redux = require('redux');
const routerStateReducer = require('redux-router').routerStateReducer


const squareReducer = (state = null, action) => {
  if (action.type === 'SQUARE_NUMBER') {
    return action.number * action.number;
  } else if (action.type === 'CLEAR_SQUARE_RESULT') {
    return null;
  }

  return state;
}

const store = redux.combineReducers({
  router: routerStateReducer,
  squaredNumber: squareReducer
});


module.exports = store;
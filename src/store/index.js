
// import the createStore:
import { createStore, combineReducers,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';


// import the .composeWithDevTools
import { composeWithDevTools } from 'redux-devtools-extension';

import catogries from './catogry';
import product from './product';
import cart from './cart'
// import thunk from './middlewares/thunk';


let reducers = combineReducers({ catogries,product,cart });

const store = () => {
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
};

export default store();
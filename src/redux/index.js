import {applyMiddleware, createStore, compose} from 'redux';
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from 'redux-thunk';
import reducers from './reducers/index';

const initialState = {};
const composeFunc = process.env.NODE_ENV === 'development' ? composeWithDevTools : compose;
const composeEnchanters = composeFunc(applyMiddleware(thunk));
const store = createStore(reducers, initialState, composeEnchanters);

export default store;
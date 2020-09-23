import {createStore, applyMiddleware, compose, combineReducers} from "redux";
import thunk from "redux-thunk";
import {Album2Reducer} from "./reducers/album2Reducers";

const initialState = {};
const composeEnhancers=window-_REDUX_DEVTOOLS_EXTENSION_COMPOSE_||compose;
const store =createStore(
    combineReducers({
    albums:albums2Reducer,
}))
initialState,
composeEnhancer(applyMiddleware(thunk))
);
export default store;

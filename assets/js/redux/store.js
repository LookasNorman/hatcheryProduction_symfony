import {applyMiddleware, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import reducers from "./reducers"
import {tokenMiddleware} from "../middleware";

const store = createStore(
    reducers,
    applyMiddleware(thunkMiddleware, tokenMiddleware)
);

export default store;
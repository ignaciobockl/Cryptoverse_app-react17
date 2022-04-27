import { combineReducers } from "redux";

import { bingNewsReducer } from "./bingNewsReducer";
import { cryptoReducer } from "./cryptoReducer";



export const rootReducer = combineReducers({
    bingNews: bingNewsReducer,
    crypto: cryptoReducer,
});
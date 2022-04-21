import { combineReducers } from "redux";

import { bingNewsReducer } from "./bingNewsReducer";
import { cryptoReducer } from "./cryptoReducer";
import { exchangeReducer } from "./exchangeReducer";



export const rootReducer = combineReducers({
    bingNews: bingNewsReducer,
    crypto: cryptoReducer,
    exchange: exchangeReducer
});
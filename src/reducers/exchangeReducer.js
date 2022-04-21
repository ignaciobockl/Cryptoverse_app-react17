import { types } from "../types/types";


const initialState = {
    exchangesList: {}
}

export const exchangeReducer = ( state = initialState, action ) => {

    switch ( action.type ) {
        case types.exchangeLoad:
            return {
                ...state,
                exchangesList: action.payload
            }
    
        default:
            return state;
    }

}
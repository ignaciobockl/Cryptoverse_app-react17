import { types } from "../types/types";


const initialState = {
    coinsList: {},
    coinSelected: {}
}

export const cryptoReducer = ( state = initialState, action ) => {

    switch ( action.type ) {
        
        case types.criptoLoad:
            return {
                ...state,
                coinsList: { ...action.payload.data },
                coinSelected: state.coinSelected
            }

        case types.criptoLoadCoin:
            return {
                ...state,
                coinsList: state.coinsList,
                coinSelected: { ...action.payload }
            }
    
        default:
            return state;
    }

}
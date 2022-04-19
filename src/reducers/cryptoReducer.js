import { types } from "../types/types";


const initialState = {
    coinsList: {},
    coinSelected: {},
    coinHistoryPrice: {}
}

export const cryptoReducer = ( state = initialState, action ) => {

    switch ( action.type ) {

        case types.criptoHistoryPrice:
            return {
                ...state,
                coinsList: state.coinsList,
                coinSelected: state.coinSelected,
                coinHistoryPrice: { ...action.payload }
            }
        
        case types.criptoLoad:
            return {
                ...state,
                coinsList: { ...action.payload.data },
                coinSelected: state.coinSelected,
                coinHistoryPrice: state.coinHistoryPrice
            }

        case types.criptoLoadCoin:
            return {
                ...state,
                coinsList: state.coinsList,
                coinSelected: { ...action.payload },
                coinHistoryPrice: state.coinHistoryPrice
            }
    
        default:
            return state;
    }

}
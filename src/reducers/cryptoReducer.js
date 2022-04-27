import { types } from "../types/types";


const initialState = {
    coinsList: {},
    coinSelected: {},
    coinHistoryPrice: {},
    coinExchanges: {}
}

export const cryptoReducer = ( state = initialState, action ) => {

    switch ( action.type ) {

        case types.criptoHistoryPrice:
            return {
                ...state,
                coinsList: state.coinsList,
                coinSelected: state.coinSelected,
                coinHistoryPrice: { ...action.payload },
                coinExchanges: state.coinExchanges
            }
        
        case types.criptoLoad:
            return {
                ...state,
                coinsList: { ...action.payload.data },
                coinSelected: state.coinSelected,
                coinHistoryPrice: state.coinHistoryPrice,
                coinExchanges: state.coinExchanges
            }

        case types.criptoLoadCoin:
            return {
                ...state,
                coinsList: state.coinsList,
                coinSelected: { ...action.payload },
                coinHistoryPrice: state.coinHistoryPrice,
                coinExchanges: state.coinExchanges
            }

        case types.criptoExchanges:
            return {
                ...state,
                coinsList: state.coinsList,
                coinSelected: state.coinSelected,
                coinHistoryPrice: state.coinHistoryPrice,
                coinExchanges: { ...action.payload }
            }
    
        default:
            return state;
    }

}
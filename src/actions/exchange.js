import Swal from "sweetalert2";

import { fetchWithoutTokenCoinRanking } from "../helpers/fetch";

import { types } from "../types/types";


const loadData = ( exchange ) => ({
    type: types.exchangeLoad,
    payload: exchange
})

export const getExchanges = () => {
    return async(dispatch) => {
        try {

            const resp = await fetchWithoutTokenCoinRanking(
                `exchange`,
                undefined,
                'GET'
            );
    
            const body = await resp.json();

            if ( resp.ok && body.status === 'success' ) {
                dispatch( loadData( body ) );
            };
            
        } catch (error) {
            Swal.fire('Error', error.toString(), 'error');
        }
    }
}
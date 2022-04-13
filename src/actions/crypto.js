import Swal from "sweetalert2";
import { fetchWithoutToken } from "../helpers/fetch";

import { types } from "../types/types"



const loadData = ( cryptoApi ) => ({
    type: types.criptoLoad,
    payload: cryptoApi
});

export const getCryptos = ( count ) => {
    return async(dispatch) => {
        try {
            
            const resp = await fetchWithoutToken(
                `coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers=1&orderBy=marketCap&orderDirection=desc&limit=${count}&offset=0`, 
                undefined, 
                'GET');
            const body = await resp.json();
    
            if ( resp.ok && body.status === 'success' ) {
                dispatch( loadData( body ) );
            };
    
        } catch (error) {
            Swal.fire('Error', error.toString(), 'error');
        }
    }
}
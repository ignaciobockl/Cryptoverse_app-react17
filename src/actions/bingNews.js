import Swal from "sweetalert2";
import { fetchWithoutTokenBingNewsApi } from "../helpers/fetch";

import { types } from "../types/types";



const loadData = ( bingNewsApi ) => ({
    type: types.newsLoad,
    payload: bingNewsApi
});

export const getNews = ( count ) => {
    return async(dispatch) => {

        try {
            
            const resp = await fetchWithoutTokenBingNewsApi(
                `news?safeSearch=Off&textFormat=Raw&count=${count}`,
                undefined,
                'GET'
            );

            const body = await resp.json();

            dispatch( loadData(body) );

        } catch (error) {
            Swal.fire('Error', error.toString(), 'error');
        }

    }
}
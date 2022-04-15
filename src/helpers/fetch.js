const baseURLCoinRanking = process.env.REACT_APP_RAPID_API_COINRANKING_URL;
const hostCoinRanking = process.env.REACT_APP_RAPID_API_COINRANKING_HOST;
const keyCoinRanking = process.env.REACT_APP_RAPID_API_COINRANKING_KEY;

const baseURLBingNews = process.env.REACT_APP_RAPID_API_BING_NEWS_URL;
const hostBingNews = process.env.REACT_APP_RAPID_API_BING_NEWS_HOST;
const keyBingNews = process.env.REACT_APP_RAPID_API_BING_NEWS_KEY;



export const fetchWithoutTokenCoinRanking = ( endpoint, data, method = 'GET' ) => {

    const url = `${ baseURLCoinRanking }/${ endpoint }`;
    
    return fetch( url, {
        // mode: 'no-cors',
        method,
        headers: {
            'Content-type': 'application/json',
            'X-RapidAPI-Host': hostCoinRanking,
            'X-RapidAPI-Key': keyCoinRanking
        },
        body: JSON.stringify( data )
    });

}

export const fetchWithoutTokenBingNewsApi = ( endpoint, data, method = 'GET' ) => {

    const url = `${ baseURLBingNews }/${ endpoint }`;

    return fetch( url, {
        // mode: 'no-cors',
        method,
        headers: {
            'Content-type': 'application/json',
            'X-BingApis-SDK': 'true',
            'X-RapidAPI-Host': hostBingNews,
            'X-RapidAPI-Key': keyBingNews
        },
        body: JSON.stringify( data )
    });

}

// export const fetchWithToken = ( endpoint, data, method = 'GET' ) => {

//     const url = `${ baseURL }/${ endpoint }`;
//     const token = localStorage.getItem('token') || '';

//     if ( method === 'GET' ) {
//         return fetch( url, {
//             method,
//             headers: {
//                 'x-token': token
//             }
//         });
//     } else {
//         return fetch( url, {
//             method,
//             headers: {
//                 'Content-type': 'application/json',
//                 'x-token': token
//             },
//             body: JSON.stringify( data )
//         });
//     }

// }
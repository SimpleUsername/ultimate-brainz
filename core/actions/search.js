export const SEARCH_ALBUMS_REQUEST = 'SEARCH_ALBUMS_REQUEST';
export const SEARCH_ALBUMS_SUCCESS = 'SEARCH_ALBUMS_SUCCESS';
export const SEARCH_ALBUMS_FAILURE = 'SEARCH_ALBUMS_FAILURE';

export function searchAlbums(query, limit, offset=0) {
    return {
        type: SEARCH_ALBUMS_REQUEST,
        payload: { query, limit, offset }
    };
}

export function searchAlbumsSuccess(query, offset, items) {
    return {
        type: SEARCH_ALBUMS_SUCCESS,
        payload: { query, offset, items }
    };
}

export function searchAlbumsFailure(query, offset, message, status) {
    return {
        type: SEARCH_ALBUMS_FAILURE,
        error: { query, offset, message, status }
    };
}

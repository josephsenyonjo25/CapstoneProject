export const GET_ARTISTS = 'GET_ARTISTS'
export const GET_ARTISTS_SUCCESS = 'GET_ARTISTS_SUCCESS'
export const GET_ARTISTS_FAILURE = 'GET_ARTISTS_FAILURE'

//Create my Redux action (using action creators)

export const getArtists =() => ({
    type:GET_ARTISTS,
})

export const getArtistsSuccess =(Artists) => ({
    type:GET_ARTISTS_SUCCESS,
    payload:Artists,
})

export const getArtistsFailure =() => ({
    type:GET_ARTISTS_FAILURE,
})

//Combining all actions in ansycronous function

export function fetchArtists(artist) {
    return async dispatch => {
        dispatch(getArtists());
        await fetch(`https://api.discogs.com/database/search?artist=${artist}&token=yySayXxBNNSTSikPoifJIbQGdoTxZrtyhPFXrEXS`)
            .then(res => res.json())
            .then(json => dispatch(getArtistsSuccess(json.track.hits)))
            .then(json => console.log(json))
            .catch(err => dispatch(getArtistsFailure()))
    }
}

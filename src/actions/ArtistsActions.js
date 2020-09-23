export const GET_ARTISTS = 'GET_ARTISTS'
export const GET_ARTISTS_SUCCESS = 'GET_ARTISTS_SUCCESS'
export const GET_ARTISTS_FAILURE = 'GET_ARTISTS_FAILURE'

//Create my Redux action (using action creators)

export const getArtists =() => ({
    type:GET_ARTISTS,
})

export const getArtistsSuccess =(Artists) => ({
    type:GET_ARTISTS_SUCCESS,
    payload: Artists,
})

export const getArtistsFailure =() => ({
    type:GET_ARTISTS_FAILURE,
})

//Combining all actions in ansycronous function

export function fetchArtists(artist) {
    return async dispatch => {
        dispatch(getArtists());
        await fetch(`https://theaudiodb.p.rapidapi.com/search.php?s=${artist}`, {
            headers: {
                "x-rapidapi-host": "theaudiodb.p.rapidapi.com",
                "x-rapidapi-key": "445be346f8mshda9feca1daca1e7p1d2417jsne43be1bf7d47"
            }
        })
            .then(res => res.json())
            .then(json => dispatch(getArtistsSuccess(json.artists)))
            .catch(err => dispatch(getArtistsFailure()))
    }
}

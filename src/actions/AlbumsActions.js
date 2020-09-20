export const GET_ALBUMS = 'GET_ALBUMS'
export const GET_ALBUMS_SUCCESS = 'GET_ALBUMS_SUCCESS'
export const GET_ALBUMS_FAILURE = 'GET_ALBUMS_FAILURE'

//Create my Redux action (using action creators)

export const getAlbums =() => ({
    type:GET_ALBUMS,
})

export const getAlbumsSuccess =(Albums) => ({
    type:GET_ALBUMS_SUCCESS,
    payload:Albums,
})

export const getAlbumsFailure =() => ({
    type:GET_ALBUMS_FAILURE,
})

//Combining all actions in ansycronous function
export function fetchAlbums(album) {
    return async dispatch => {
        dispatch(getAlbums());
        await fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${album}`, {
            headers: {
                "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                "x-rapidapi-key": process.env.REACT_APP_RAPID_KEY
            }
        })
            .then(res => res.json())
            .then(json => dispatch(getAlbumsSuccess(json.data.map(song => song.album))))
            .catch(err => dispatch(getAlbumsFailure()))
    }
}

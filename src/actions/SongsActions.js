export const GET_SONGS = 'GET_SONGS';
export const GET_SONGS_SUCCESS = 'GET_SONGS_SUCCESS';
export const GET_SONGS_FAILURE = 'GET_SONGS_FAILURE';

//Create my Redux action (using action creators)

export const getSongs = () => ({
    type: GET_SONGS,
});

export const getSongsSuccess = (Songs) => ({
    type: GET_SONGS_SUCCESS,
    payload: Songs,
})

export const getSongsFailure = () => ({
    type: GET_SONGS_FAILURE,
})

//Combining all actions in ansycronous function

export function fetchSongs(song) {
    return async dispatch => {
        dispatch(getSongs());
        await fetch(`https://shazam.p.rapidapi.com/search?term=${song}`, {
            headers: {
                'x-rapidapi-key': process.env.REACT_APP_RAPID_KEY,
                'x-rapidapi-host': 'shazam.p.rapidapi.com'
            }
        })
            .then(res => res.json())
            .then(json => dispatch(getSongsSuccess(json.tracks.hits)))
            .catch(err => dispatch(getSongsFailure()))
    }
}
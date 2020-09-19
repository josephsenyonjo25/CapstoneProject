export const GET_SONGS = 'GET_SONGS';
export const GET_SONGS_SUCCESS = 'GET_SONGS_SUCCESS';
export const GET_SONGS_FAILURE = 'GET_SONGS_FAILURE';

//Create my Redux action (using action creators)

export const getSongs = (songs) => ({
    type: GET_SONGS,
    payload: songs
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
    console.log('song:', song);

    return async dispatch => {
        await fetch(`https://shazam.p.rapidapi.com/search?term=${song}`, {
            headers: {
                'x-rapidapi-key': process.env.REACT_APP_SHAZAM_API,
                'x-rapidapi-host': 'shazam.p.rapidapi.com'
            }
        })
            .then(res => res.json())
            .then(json => dispatch(getSongs(json.tracks.hits)))
            .catch(() => dispatch(getSongsFailure()))
    }
}
export const GET_SONGS = 'GET_SONGS';
export const GET_SONGS_SUCCESS = 'GET_SONGS_SUCCESS';
export const GET_SONGS_FAILURE = 'GET_SONGS_FAILURE';

//Create my Redux action (using action creators)

export const getSongs =(song) => ({
    type:GET_SONGS,
    payload:song
});

export const getSongsSuccess =(Songs) => ({
    type:GET_SONGS_SUCCESS,
    payload:Songs,
})

export const getSongsFailure =() => ({
    type:GET_SONGS_FAILURE,
})

//Combining all actions in ansycronous function

export function fetchSongs(){
    return async (dispatch) => {
        console.log("fetchSongs")
        dispatch(getSongs())

        try{
            const res = await
            fetch('https://audiomack.com/v1')
            const data = await res.json()
            console.log(data)
          dispatch(getSongsSuccess(data))
        } catch (error) {
            console.log()
            dispatch(getSongsFailure())
    }

}
}
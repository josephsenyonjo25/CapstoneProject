export const GET_SONGS = 'GET_SONGS'
export const GET_SONGS_SUCCESS = 'GET_SONGS_SUCCESS'
export const GET_SONGS_FAILURE = 'GET_SONGS_FAILURE'

//Create my Redux action (using action creators)

export const getSongs =() => ({
    type:GET_SONGS,
})

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
        dispatch(getSongs())

        try{
            const res = await
            fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await res.json()
            console.log(data)
          dispatch(getSongsSuccess(data))
        } catch (error) {
            dispatch(getSongsFailure())
    }

}
}
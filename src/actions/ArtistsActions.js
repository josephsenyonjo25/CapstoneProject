export const GET_ARTISTs = 'GET_ARTISTS'
export const GET_ARTIST_SUCCESS = 'GET_ARTISTS_SUCCESS'
export const GET_ARTISTS_FAILURE = 'GET_ARTISTS_FAILURE'

//Create my Redux action (using action creators)

export const getArtists =() => ({
    type:GET_ARTISTS,
})

export const getArtistsSuccess =(posts) => ({
    type:GET_ARTISTS_SUCCESS,
    payload:Artists,
})

export const getPostsFailure =() => ({
    type:GET_ARTISTS_FAILURE,
})

//Combining all actions in ansycronous function

export function fetchArtists(){
    return async (dispatch) => {
        dispatch(getArtists())

        try{
            const res = await
            fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await res.json()
            console.log(data)
          dispatch(getArtistsSuccess(data))
        } catch (error) {
            dispatch(getArtistsFailure())
    }

}
}
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

export function fetchAlbums(){
    return async (dispatch) => {
        dispatch(getAlbums())

        try{
            const res = await
            fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await res.json()
            console.log(data)
          dispatch(getAlbumsSuccess(data))
        } catch (error) {
            dispatch(getAlbumsFailure())
    }

}
}
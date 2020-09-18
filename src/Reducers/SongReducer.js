import * as actions from '../actions/SongsActions'

export const initialState = {
    songs:[],
    loading:false,
    hasErrors:false
}

export default (state =initialState, action) => {
    switch(action.type) {
        case actions.GET_SONGS:
            return { ...state, loading:true}
        case actions.GET_SONGS_SUCCESS:
            console.log(action.payload)
            return {songs:action.payload, loading:false, hasErrors: false}
       case actions.GET_SONGS_FAILURE:
            return { ...state, loading: false, hasErrors: true}
    default:
        return state
}
}
/*export function songReducer (state =initialState, action) => {
    switch(action.type) {
        case GET_SONGS
        let songs =[...state.songs, action.payload]*/
    
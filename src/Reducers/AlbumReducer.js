import * as actions from '../actions/AlbumsActions'

export const initialState = {
    albums:[],
    loading:false,
    hasErrors:false
}

export default function AlbumReducer(state =initialState, action){
    switch(action.type) {
        case actions.GET_ALBUMS:
            return { ...state, loading:true}
        case actions.GET_ALBUMS_SUCCESS:
            console.log(action.payload)
            return {albums:action.payload, loading:false, hasErrors: false}
       case actions.GET_ALBUMS_FAILURE:
            return { ...state, loading: false, hasErrors: true}
    default:
        return state
}
}
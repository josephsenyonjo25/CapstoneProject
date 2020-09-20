import * as actions from '../actions/ArtistsActions'

export const initialState = {
    artists:[],
    loading:false,
    hasErrors:false
}

export default (state =initialState, action) =>{
    switch(action.type) {
        case actions.GET_ARTISTS:
            return { ...state, loading:true}
        case actions.GET_ARTISTS_SUCCESS:
            console.log(action.payload)
            return {artists:action.payload, loading:false, hasErrors: false}
       case actions.GET_ARTISTS_FAILURE:
            return { ...state, loading: false, hasErrors: true}
    default:
        return state
}
}
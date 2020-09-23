import { FILTER_ALBUMS_BY_ARTIST } from "../types";

const { bindActionCreators } = require("redux");

export const albumsReducer=(state ={}, action) =>{
    switch (action.type){
        case FILTER_ALBUMS_BY_ARTIST:
            return {
                ...state,
                title:action.payload.title,
                filteredItems:action.payload.items,
            };
        case ORDER_PRODUCTS_BY_PRICE:
            return { ...state,
                sort:action.payload.sort,
                filteredItems: action.payload.items,
            };
        case FETCH_ALBUMS:
            return {items: action.payload};
            default:
                return state;
    }
};
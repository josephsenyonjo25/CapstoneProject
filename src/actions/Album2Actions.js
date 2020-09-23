import { findAllByTitle, findByTitle } from "@testing-library/react";
import { CardTitle } from "reactstrap";
import {FETCH_ALBUMS} from "../types";
import {FILTER_ALBUMS_BY_TITLE} from "../types";



export const fetchAlbums =() => async (dispatch)  =>{
const res = await fetch("api/albums");
const data = await res.json();
console.log(data);
dispatch({
    type:FETCH_ALBUMS,
    payload:res.data,
});
};
export const filterAlbums =(albums, title) => (dispatch) =>{
    dispatch({
        type:FILTER_ALBUMS_BY_TITLE,
        payload:{
            title: title,
            items: title === ""? albums:
            albums.filter(x=>x.availableTitles.indexOf(title)>=0)
        }
    });
}
export const sortAlbums =(filteredAlbums, sort) => (dispatch) =>{
    const sortedAlbums = filteredAlbums.slice();
    if(sort === "latest") {
        sortedAlbums.sort((x,y) => (x._id > y._id? 1:-1))
    }else {
        sortedAlbums.sort ((x,y) =>
            sort === "lowest"
            ?x.price . y.price
            ? 1
            :-1
            :x.price > y.price 
            ?-1
            :1
            
        );
    }
    dispatch({
        type:ORDER_ALBUMS_BY_PRICE,
        payload:{
            sort: sort,
            items:sortedAlbums
        },
        
        });
};
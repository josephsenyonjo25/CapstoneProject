import React, {Component } from 'react'
import formatCurrency from "../util";
import { GET_ALBUMS_FAILURE } from './actions/AlbumsActions';
export default class cartProducts extends Component {
    render(){
        return(
            <div>
               <ul className="albums">
                   {this.props.albums.map(album =>
                        <li key={album._id}>
                           <div className="album">
                               <a href={"#" + product._id}>
                                <img src={album.image} alt="album image"></img>
                                <p>
                                    {album.title}
                                </p>
                                </a> 
                                <div className="album-price">
                                    <div>{formatCurrency(album.price)}</div>
                                    
                                    <button onClick={()=>this.props.addToCart(albums)} className="add">Add To Cart</button>
                                                 
                                    </div>
                                </div> 
                          </li>  
                    ))}
                   </ul> 
            </div>


        )



    }





}
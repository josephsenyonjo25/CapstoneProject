import React, {Component } from 'react'
import formatCurrency from "../util";
import Fade from 'react-reveal/Fade';
import Modal from "react-modal";

export default class cartProducts extends Component {
    constructor(props){
        super(props);
        this.state ={
            album:null,
        }
    }
    render(){
        return(
            <div>
            <Fade bottom cascade>
               <ul className="albums">
                   {this.props.albums.map(album =>
                        <li key={album._id}>
                           <div className="album">
                               <a href={"#" + product._id} onClick={()=>openModal}>
                                <img src={album.image} alt="album image"></img>
                                <p>{album.title}</p>
                                </a>     
                                <div className="album-price">
                                    <div>{formatCurrency(album.price)}</div>
                                    
                                    <button onClick={()=>this.props.addToCart(albums)} 
                                    className="add">
                                        Add To Cart
                                    </button>
                                             
                                    </div>
                                </div> 
                          </li>  
                    ))}
                   </ul> 
                   </Fade>
            </div>

        );
    }

    }






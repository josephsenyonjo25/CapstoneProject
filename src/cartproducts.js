import React, {Component } from 'react'
import formatCurrency from "../util";
import Fade from 'react-reveal/Fade';
import Modal from "react-modal";
import Zoom from "react-reveal/Zoom";

export default class cartProducts extends Component {
    constructor(props){
        super(props);
        this.state ={
            album:null,
        }
    }
    openModal =(album) =>{
        thissetState({album});
    };
    closeModal =() =>{
        this.setState({album:null});
    }
    render(){
        const {album} =this.state;
        return(
            <div>
            <Fade bottom cascade>
               <ul className="albums">
                   {this.props.albums.map(album =>
                        <li key={album._id}>
                           <div className="album">
                               <a href={"#" + product._id} 
                               onClick={()=>this.openModal(Album)}>
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
                   {
                       album &&
                       <Modal isOpen={true}>
                           onRequestClose={this.closeModal}
                           
                           <Zoom>
                               <button className="close-modal" onClick={this.closeModal}>
                                   x
                               </button>
                               <div className ="album-details">
                                   <img src={album.image} alt ={album.title}></img>
                                   <div className ="album-details-description">
                                       <p>
                                           <strong>{album.title}</strong>
                                       </p>
                                       <p>
                                           {album.description}
                                       </p>
                                       <p>
                                           Genre:{""}
                                           {album.genre.map(x=>(
                                               <span> {""}
                                                <button className="button">{x}</button>
                                                </span>
                                           ))}
                                       </p>
                                       <div className="album-price">
                                           <div>{formatCurrency(album.price)}</div>
                                           <button className="button add" onClick={()=>{
                                               this.props.addToCart(album)
                                               this.closeModal();
                                           }}>
                                               Add To Cart
                                               </button>
                                               
                                           
                                       </div>
                               </div>
                               </div>
                            </Zoom>
                           
                       </Modal>
                   }
            </div>

        );
    }

    }






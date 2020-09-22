import React, { Component } from 'react';
//import { ListGroup } from 'reactstrap';

export default class Cartbar extends Component{
    render(){
        const { cartItems } =this.props;
        return(
            <div>
                {cartItems.length === 0 ? (
                <div className= "cart cart-header">Cart is empty</div>
                  ) : (
                <div className= "cart cart-header">
                There is {cartItems.length} in the cart{""}
               </div>
            )}
            
<div>
    <div className="cart">
        <ul className="cart-items">
                {cartItems.map(item =>(
                <li key={Item._id}>
                    <div>
                        <img src={Item.image} alt ={Item.title}></img>
                    </div>
                    <div>
                        <div>{Item.title}</div>
                        <div className="right">
                            {formatCurrency(item.price)} x {item.count} {""}
                        <button 
                        className="button" 
                        onClick={()=>this.props.removeFromCart(item)}>
                         Remove
                         </button>
                         </div>
                    </div>
                </li>
                ))}
        </ul>
</div>
{cartItems.length!==0 && (
    <div className ="cart">
    <div className="total">
        <div>
            Total:{""}
            {formatCurrency(
                cartItems.reduce((x,z)=> x + z.price*z.count, 0)
                
                )}
        </div>
        <button className ="button add">Proceed</button>
        </div>
</div>
)}

</div>
</div>
);
}
}
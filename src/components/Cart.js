import React from "react";
import data from "./data.json";
import Filter from "./Filter";

class App extends React.Component() {
    constructor(){
        super();
        this.state={
            albums: data.albums,
            cartItems:localStorage.getItem("cartItems")?JSON.parse(localStorage.getItem("cartItems")):[],
            genre:"",
            sort:"",
        };
    }
    createOrder =(order) =>{
        alert("save order for " + order.name);
    };
    removeFromCart =(album) =>{
        const cartItems=this.state.cartItems.slice();
        this.setState({
            cartItems:cartItems.filter(c=>c._id!==album._id),
        });
        localStorage.setItem("cartItems", 
        JSON.Stringify(cartItems.filter(c=>c._id!==album._id))
        );
    };
addToCart = (album) =>{
    const cartItems=this.state.cartItems.slice();
    let alreadyInCart =false;
    cartItems.forEach(item =>{
        if(item._id===album._id){
            item.count++;
            alreadyInCart =true;
        }
    });
    if(!alreadyInCart){
        cartItems.push({...album, count: 1});
    }
    this.setState({cartItems})
    localStorage.setItem("cartItems", JSON.Stringify(cartItems));
};   
sortProducts = (event) => {
const sort =event.target.value;        
console.log(event.target.value);
this.setState((state) => ({ 
    sort: sort,
    albums: this.state.albums
    .slice()
    .sort((x,y) =>
        sort === "lowest"
        ?x.price > y.price
        ? 1
        :-1
        :sort ==="highest"
        ?x.price < y.price
        ? 1
        :-1
        :x._id < y._id
        ? 1
        :-1
    ),
}));
    };
    filterProducts = (event) =>{
console.log(event.target.value);
if(event.target.value===""){
    this.setState({genre:event.target.value, albums:data.albums});
} else{
    this.setState({ 
        genre:event.target.value,
        albums:data.albums.filter(
        (album) => album.availableGenres.indexOf(event.target.value)>0
    ),
    });
        }

    };
    render(){
    return(
        <div className="grid-container">
            <header>
                <a href= "/">Shopping Cart</a>
            </header>
            <main>
                <div className="content">
                    <div className="main">
                        <Filter count = {this.state.albums.length}>
                            genre={this.state.genre}
                            sort={this.state.sort}
                        </Filter>
                        <Albums albums = {this.state.albums} addToCart={this.addToCart}></Albums>
                    </div>
                    <div className="sidebar">
                        <Cart cartItems={this.state.cartItems}
                         removeFromCart={this.removeFromCart} 
                         createOrder={this.createOrder}
                         />
                         
                    </div>
                </div>
            </main>
            <footer>All rights reserved</footer>
        </div>
    );
    }
}

export default App;




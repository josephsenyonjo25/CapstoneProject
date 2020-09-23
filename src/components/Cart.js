import React from "react";
import data from "./data.json";
import Filter from "./Filter";

class App extends React.Component() {
    constructor() {
        super();
        this.state = {
            albums: data.albums,
            cartItems: localStorage.getItem("cartItems")
             ? JSON.parse(localStorage.getItem("cartItems")) 
             : [],
            genre: "",
            sort: "",
        };
    }

    render() {
        return (
            <div className="grid-container">
                <header>
                    <a href="/">Shopping Cart</a>
                </header>
                <main>
                    <div className="content">
                        <div className="main">
                            <Filter> 
                            </Filter>
                            <Albums albums addToCart={this.addToCart}></Albums>
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

export default App;*/

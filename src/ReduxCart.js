import React, { Component } from "react";
import formatCurrency from "../util";
import Fade from "react-reveal/Fade";

export default class Cartbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      password: "",
      ccn: "",
      showCheckout: false,
    };
  }
  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  createOrder = (e) => {
    e.preventDefault();
    const order = {
      firstName: this.state.firstname,
      lastName: this.state.lastName,
      email: this.state.email,
      address: this.state.address,
      password: this.state.password,
      ccn: this.state.ccn,
      cartItems: this.props.cartItems,
    };
    this.props.createOrder(order);
  };
  render() {
    const { cartItems } = this.props;
    return (
      <div>
        {cartItems.length === 0 ? (
          <div className="cart cart-header">Cart is empty</div>
        ) : (
          <div className="cart cart-header">
            There is {cartItems.length} in the cart{""}
          </div>
        )}

        <div>
          <div className="cart">
            <Fade left cascade>
              <ul className="cart-items">
                {cartItems.map((item) => (
                  <li key={Item._id}>
                    <div>
                      <img src={Item.image} alt={Item.title}></img>
                    </div>
                    <div>
                      <div>{Item.title}</div>
                      <div className="right">
                        {formatCurrency(item.price)} x {item.count} {""}
                        <button
                          className="button"
                          onClick={() => this.props.removeFromCart(item)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </Fade>
          </div>
          {cartItems.length !== 0 && (
            <div>
              <div className="cart">
                <div className="total">
                  <div>
                    Total:{""}
                    {formatCurrency(
                      cartItems.reduce((x, z) => x + z.price * z.count, 0)
                    )}
                  </div>
                  <button
                    onClick={() => {
                      this.setState({ showcheckOut: true });
                    }}
                    className="button add"
                  >
                    Proceed
                  </button>
                </div>
              </div>
              {this.state.showCheckout && (
                <Fade right cascade>
                  <div className="cart">
                    <form onSubmit={this.createOrder}>
                      <ul className="form-container">
                        <li>
                          <label>firstName</label>
                          <input
                            name="name"
                            type="text"
                            required
                            onChange={this.handleInput}
                          ></input>
                        </li>
                        <li>
                          <label>lastName</label>
                          <input
                            name="lastname"
                            type="text"
                            required
                            onChange={this.handleInput}
                          ></input>
                        </li>
                        <li>
                          <label>Email</label>
                          <input
                            name="email"
                            type="email"
                            required
                            onChange={this.handleInput}
                          ></input>
                        </li>
                        <li>
                          <label>Address</label>
                          <input
                            name="address"
                            type="text"
                            required
                            onChange={this.handleInput}
                          ></input>
                        </li>
                        <li>
                          <label>Password</label>
                          <input
                            name="password"
                            type="password"
                            required
                            onChange={this.handleInput}
                          ></input>
                        </li>
                        <li>
                          <label>ccn</label>
                          <input
                            name="ccn"
                            type="text"
                            required
                            onChange={this.handleInput}
                          ></input>
                        </li>
                        <li>
                          <button className="add" type="submit">
                            Checkout
                          </button>
                        </li>
                      </ul>
                    </form>
                  </div>
                </Fade>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
}

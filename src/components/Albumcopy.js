import React from "react";
import { connect } from "react-redux";

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

const Album = (props) => {
  const { album } = props;

  const handleAddToCart = () => {
    const cartItems = this.props.cart;
    let alreadyInCart = false;

    cartItems.forEach((item) => {
      if (item._id === album.md5_image) {
      }
    });

    if (!alreadyInCart) {
      cartItems.push({ ...album, count: 1 });
    }

    // 1) Update redux state
    //   - Check if album already exists in cart
    //     if it does, increment the count
    //      otherwise, just append to this.props.carts
    // 2) update localStorage

    localStorage.setItem("cartItems", JSON.Stringify(this.props.cart));
  };

  return (
    <Card>
      <CardImg top src={album.cover} alt="Card image cap" />
      <CardBody>
        <CardTitle>{album.title}</CardTitle>
        <Button onClick={handleAddToCart}>Add to cart</Button>
      </CardBody>
    </Card>
  );
};

const mapStateToProps = (state) => {
  cart: state.cart.cartItems;
};

const mapDispatchToProps = (dispatch) => {};

export default connect(mapStateToProps, mapDispatchToProps)(Album);

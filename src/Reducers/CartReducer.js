import * as actions from "../actions/CartActions";

const initialState = {
    cartItems: []
};

function cartIncrement(state, actions) {
    let newState = state.slice(); // copy

    newState.forEach(item => {
        if (item._id === actions.id) {
            item.count++;
        }
    });

    return newState;
}

export default function (state = initialState, actions) {
    switch (action.type) {
        case actions.CART_ADD:
            return {
                ...state,
                cartItems: cartItems.concat(actions.payload)
            }
        
        case actions.CARD_DELETE:
            return {
                ...state,
                cartItems: cartItems.filter(item => item.md5_image != actions.id)
            }
        case actions.CART_INCREMENT:
            return cartIncrement(state, actions);
        default:
            return state
    }
}

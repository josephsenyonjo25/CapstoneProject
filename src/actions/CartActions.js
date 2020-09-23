export const CART_ADD = "CART_ADD"
export const CART_REMOVE = "CART_REMOVE"
export const CART_INCREMENT = "CART_INCREMENT"

export function cartAdd(album) {
    return {
        type: CARD_ADD,
        payload: album
    }
}

export function cardDelete(id) {
    return {
        type: CART_REMOVE,
        id: id
    }
}

export function cartIncrement(id) {
    return {
        type: CART_INCREMENT,
        id: id
    }
}
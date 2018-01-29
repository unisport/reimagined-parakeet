/**
 *
 */
const ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART'
export const addItemToCart = (product) => (
    {
        type: ADD_ITEM_TO_CART,
        product
    }
)

const SUBMIT_CART = 'SUBMIT_CART'
export const submitCart = () => (
    {
        type: SUBMIT_CART
    }
)

const UPDATE_CART_ITEM = 'UPDATE_CART_ITEM'
export const updateCart = (product) => (
    {
        type: UPDATE_CART_ITEM,
        product
    }
)

const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM'
export const removeCartItem = (choice_id) => (
    {
        type: REMOVE_CART_ITEM,
        choice_id
    }
)

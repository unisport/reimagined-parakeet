/**
 *
 */
const ADD_TO_CART = 'ADD_TO_CART'
export const addToCart = (product, group) => (
    {
        type: 'ADD_TO_CART',
        product,
        group
    }
)

const SUBMIT_CART = 'SUBMIT_CART'
export const submitCart = (products) => (
    {
        type: 'SUBMIT_CART',
        products
    }
)

const UPDATE_CART = 'UPDATE_CART'
export const updateCart = (product) => (
    {
        type: 'UPDATE_PRODUCT',
        product
    }
)

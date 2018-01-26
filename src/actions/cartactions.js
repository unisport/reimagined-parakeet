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

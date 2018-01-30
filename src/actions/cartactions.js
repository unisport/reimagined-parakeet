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
// Not a super descriptive name...
const SUBMIT_SELECTION = 'SUBMIT_SELECTION'
export const submitSelection = () => (
    {
        type: SUBMIT_SELECTION
    }
)

const SUBMIT_SIZES = 'SUBMIT_SIZES'
export const submitSizes = () => (
    {
        type: SUBMIT_SIZES
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

const ADD_CUSTOMISATION = 'ADD_CUSTOMISATION'
export const addCustomisation = (sizeId, customisation) => (
    {
        type: ADD_CUSTOMISATION,
        sizeId,
        customisation
    }
)

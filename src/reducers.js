/**
 *
 */
import { combineReducers } from 'redux'

const products = (state = [], action) => {
    switch(action.type) {
        default:
            return state
        case 'RECEIVE_PRODUCTS':
            return action.products
    }
};

const sizes = (state = [], action) => {
    switch(action.type) {
        default:
            return state
        case 'RECEIVE_SIZES':
            return action.sizes
    }
}

const settings = (state = {}, action) => {
    switch(action.type) {
        default:
            return state
        case 'RECEIVE_SETTINGS':
            return {
                currency: action.currency,
                locale: action.locale,
                vat: action.vat
            }
    }
}

const cart = (state = [], action) => {
    switch(action.type) {
        default:
            return state
        case 'ADD_ITEM_TO_CART':
            return [
                ...state.filter((product) =>
                    product.choice_id != action.product.choice_id
                ),
                {...action.product, quantity: 1, sizes: []}
            ]
        case 'REMOVE_CART_ITEM':
            return [
                ...state.filter((product) =>
                    product.choice_id != action.choice_id)
            ]
    }
}

const reducers = combineReducers({
    products,
    sizes,
    settings,
    cart
})

export default reducers;

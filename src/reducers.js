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
        case 'ADD_TO_CART':
            let product = Object.assign({
                quantity: 1,
                sizes: []
            }, action.product)
            let group = action.group

            let index = state.findIndex((p) => {
                return p.group == group
            })
            if (index == -1) {
                return [
                    ...state,
                    {group, ...product}
                ]
            } else {
                return [
                    ...state.slice(0, index),
                    {group, ...product},
                    ...state.slice(index + 1)
                ]
            }
        case 'UPDATE_CART':
            return state
    }
}

const reducers = combineReducers({
    products,
    sizes,
    settings,
    cart
})

export default reducers;

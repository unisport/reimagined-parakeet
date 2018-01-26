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

const settings = (state = {}, action) => {
    switch(action.type) {
        default:
            return state
        case 'RECEIVE_SETTINGS':
            return {
                currency: action.cyrrency,
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
            console.log(action)
            return state
    }
}

const reducers = combineReducers({
    products,
    settings,
    cart
})

export default reducers;

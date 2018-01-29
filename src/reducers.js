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
        case 'UPDATE_CART_ITEM':
            let product = state.find((p) =>
                p.id == action.productId
            )
            product.sizes.push({id: action.sizeId, quantity: action.quantity})
            product.quantity += action.quantity

            return [
                ...state.filter((p) =>
                    p.id != product.id
                ),
                product
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

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
            // Find the product
            let product = state.find((p) =>
                p.id == action.productId
            )
            // Remove any duplicate size id
            let sizes = product.sizes.filter((size) =>
                size.id != action.sizeId
            )
            // Push the size onto the sizes
            product.sizes.push({id: action.sizeId, quantity: action.quantity})
            // Update quantity
            // FIXME: figure out what to do about initial quantity
            product.quantity += action.quantity

            return [
                ...state,
                product
            ]
        case 'ADD_CUSTOMISATION':
            console.log('add customisation', state, action)
            return state
    }
}

const customisations = (state = [], action) => {
    switch (action.type) {
        default:
            return state
        case 'RECEIVE_CUSTOMISATION':
            return action.customisations
    }
}

const reducers = combineReducers({
    products,
    sizes,
    settings,
    cart,
    customisations
})

export default reducers;

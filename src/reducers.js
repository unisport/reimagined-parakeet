/**
 *
 */
import { combineReducers } from 'redux'

const choices = (state = [], action) => {
    switch(action.type) {
        default:
            return state
        case 'RECEIVE_CHOICES':
            return action.choices
        case 'MAKE_CHOICE':
            // console.log(action)
            return state
    }
};
/**
 * TODO: rename to customerchoices
 */
const customerselected = (state = [], action) => {
    switch (action.type) {
        default:
            return state
        case 'SELECT_PRODUCT':
            return [
                ...state.filter(product => product.choice != action.choice),
                {choice: action.choice, product: action.product}
            ]
    }
    return state
}

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

const customizations = (state = [], action) => {
    switch (action.type) {
        default:
            return state
        case 'RECEIVE_CUSTOMIZATIONS':
            return action.customizations
    }
}

const customersizes = (state = [], action) => {
    switch (action.type) {
        default:
            return state
        case 'SELECT_SIZE':
            return [
                ...state.filter(product => product.size != action.size),
                {product: action.product, size: action.size, quantity: action.quantity}
            ]
    }
}

const customercustomizations = (state = [], action) => {
    switch (action.type) {
        default:
            return state
        case 'SELECT_CUSTOMIZATION':
            return [
                ...state.filter(customization =>
                    customization.id != action.id),
                {
                    product: action.product,
                    size: action.size,
                    customizationtype: action.customizationtype,
                    customizationvalue: action.customizationvalue,
                    id: action.id
                }
            ]
    }
}

const reducers = combineReducers({
    choices,
    sizes,
    settings,
    customizations,
    customerselected,
    customersizes,
    customercustomizations
})

export default reducers;

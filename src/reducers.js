/**
 *
 */
import { combineReducers } from 'redux'

const choices = (state = [], action) => {
    switch(action.type) {
        default:
            return state
        case 'RECEIVE_CHOICES':
            return state
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

const customizations = (state = [], action) => {
    switch (action.type) {
        default:
            return state
        case 'RECEIVE_CUSTOMISATION':
            return action.customisations
    }
}

const reducers = combineReducers({
    choices,
    sizes,
    settings,
    customizations
})

export default reducers;

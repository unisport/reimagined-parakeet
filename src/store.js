/**
 *
 */
import {
    createStore,
    compose,
    applyMiddleware
} from 'redux'

import ChoicesMiddleware from './middleware/choicesmiddleware'
import SizesMiddleware from './middleware/sizesmiddleware'

const enhancer =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

import reducers from './reducers'

const initialState = {
    sizes: [],
    settings: {
        currency: '',
        locale: '',
        vat: ''
    },
    customizations: [],
    choices: [],
    customerselected: []
}

const store = createStore(
    reducers,
    initialState,
    compose(
        enhancer(applyMiddleware(
            ChoicesMiddleware,
            SizesMiddleware
        ))
    )
);

export default store;

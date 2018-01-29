/**
 *
 */
import {
    createStore,
    compose,
    applyMiddleware
} from 'redux'

import ProductsMiddleware from './middleware/ProductsMiddleware'
import CartMiddleware from './middleware/CartMiddleware'

const enhancer =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

import reducers from './reducers'

const initialState = {
    products: [],
    sizes: [],
    settings: {
        currency: '',
        locale: '',
        vat: ''
    },
    cart: []
}

const store = createStore(
    reducers,
    initialState,
    compose(
        enhancer(applyMiddleware(
            ProductsMiddleware,
            CartMiddleware
        ))
    )
);

export default store;

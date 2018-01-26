/**
 *
 */
import axios from 'axios'

import * as actions from './../actions/productactions'

const PRODUCTS_URL = 'https://cors-anywhere.herokuapp.com/https://www.unisport.dk/services/product_groups/1/'

const ProductsMiddleware = store => next => action => {
    if (action.type == 'REQUEST_PRODUCTS') {
        axios.get(PRODUCTS_URL)
            .then(resp => {
                store.dispatch(actions.receiveSettings(
                    resp.data.locale,
                    resp.data.currency,
                    resp.data.vat_rate
                ))
                store.dispatch(actions.receiveProducts(resp.data.subgroups))
            })
    }
    // Always call next inside middleware
    next(action);
}

export default ProductsMiddleware

/**
 *
 */
import axios from 'axios'

import * as actions from './../actions/productactions'
import {
    PRODUCT_SIZES,
    PRODUCTS_URL
} from './../urls'

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
    // TODO: should go to sizes middleware
    if (action.type == 'REQUEST_SIZES') {
        axios.get(PRODUCT_SIZES).then(resp =>
            store.dispatch(actions.receiveSizes(resp.data.subgroups))
        ) 
    }

    // Always call next inside middleware
    next(action);
}

export default ProductsMiddleware

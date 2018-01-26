/**
 *
 */
import axios from 'axios'

import * as actions from './../actions/cartactions'

const PRODUCTS_URL = 'https://cors-anywhere.herokuapp.com/https://www.unisport.dk/services/product_groups/select/'

const CartMiddleware = store => next => action => {
    if (action == 'SUBMIT_CART') {
        let params = {
            'customer_selected': {
                
            }
        }
    }

    next(action);
}

export default CartMiddleware

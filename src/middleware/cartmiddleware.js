/**
 *
 */
import axios from 'axios'

import * as actions from './../actions/cartactions'

const SELECT_URL = 'https://cors-anywhere.herokuapp.com/https://www.unisport.dk/services/product_groups/select/'

const CartMiddleware = store => next => action => {

    if (action.type == 'SUBMIT_CART') {
        let cart = store.getState().cart
        let params = {
            'customer_selected': {}
        }
        cart.forEach((product, i) =>
            params.customer_selected[i] = {
                choice_id: product.choice_id,
                product_id: product.id
            }
        )
        /* axios.post(SELECT_URL, params).then((resp) =>
            console.log(resp)
        )*/
        // console.log('submitting', params)
    }

    next(action);
}

export default CartMiddleware

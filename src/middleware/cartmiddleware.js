/**
 *
 */
import axios from 'axios'

import { ENDPOINT_CHOICES } from './../endpoints'
import * as actions from './../actions/choicesactions'

const CartMiddleware = store => next => action => {

    if (action.type == 'REQUEST_CHOICES') {
        axios.get(ENDPOINT_CHOICES).then(resp => console.log(resp))
    }
    next(action);
}

export default CartMiddleware

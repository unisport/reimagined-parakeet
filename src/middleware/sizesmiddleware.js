/**
 * 
 *
 */
import axios from 'axios'

import * as actions from './../actions/sizesactions'
import { ENDPOINT_SIZES } from './../endpoints'

const SizesMiddleware = store => next => action => {
    if (action.type == 'REQUEST_SIZES') {
        axios.get(ENDPOINT_SIZES).then(resp =>
            store.dispatch({
                type: 'RECEIVE_SIZES',
                sizes: resp.data.subgroups
            }) 
        )
    }
    
    next(action);
}

export default SizesMiddleware;

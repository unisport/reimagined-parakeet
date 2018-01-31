/**
 *
 */
import axios from 'axios'

import { ENDPOINT_CUSTOMIZATIONS } from './../endpoints'
import { RECEIVE_CUSTOMIZATIONS } from './../actions/customizationsactions'

const CustomizationsMiddleware = store => next => action => {
    if (action.type == 'REQUEST_CUSTOMIZATIONS') {
        /* TODO: Error handline */
        console.log(ENDPOINT_CUSTOMIZATIONS)
        axios.get(ENDPOINT_CUSTOMIZATIONS).then(resp =>
            store.dispatch({
                type: 'RECEIVE_CUSTOMIZATIONS',
                customizations: resp.data.subgroups
            })
        )
    }

    next(action);
}

export default CustomizationsMiddleware;

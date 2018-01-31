 /**
  * 
  *
 */
import axios from 'axios'

import * as actions from './../actions/choicesactions'
import { RECEIVE_SETTINGS } from './../actions/settingsactions'
import { ENDPOINT_CHOICES } from './../endpoints'

const ChoicesMiddleware = store => next => action => {
    if (action.type == 'REQUEST_CHOICES') {
        /* TODO: Error handline */
        axios.get(ENDPOINT_CHOICES).then(resp => {
            store.dispatch({
                type: 'RECEIVE_SETTINGS',
                currency: resp.data.currency,
                locale: resp.data.locale,
                vat: resp.data.vat_rate
            })
            store.dispatch({
                type: 'RECEIVE_CHOICES',
                choices: resp.data.subgroups
            })
        })
    }

    next(action);
}

export default ChoicesMiddleware

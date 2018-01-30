 /**
  * 
  *
 */
import axios from 'axios'

import * as actions from './../actions/cartactions'

const ChoicesMiddleware = store => next => action => {

    next(action);
}

export default ChoicesMiddleware

/**
 *
 *
 */
import React from 'react'
import { connect } from 'react-redux'

import store from './../store'

class Cart extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            total: 0,
            currency: 'DKK',
            products: []
        }
    }

    componentWillReceiveProps(nextProps) {
        let total = 0
        nextProps.cart.forEach((p) => {
            total += p.unit_net_price
        })

        this.setState({
            currency: nextProps.settings.currency,
            products: nextProps.cart,
            total: total
        })
    }

    render() {
        return <div>
                Total { this.state.total.toLocaleString('da-DK') } { this.state.currency }
                <div>
                    <button>Submit</button>
                </div>
            </div>
    }
}

store.subscribe(() => {
    // console.log(store.getState().cart)
})

const stateProps = (state) => (
    {
        cart: state.cart,
        settings: state.settings
    }
)

export default connect(stateProps)(Cart);

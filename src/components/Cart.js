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
            total += ((p.unit_net_price / 100) * p.quantity)
        })

        this.setState({
            currency: nextProps.settings.currency,
            products: nextProps.cart,
            total: total
        })
    }

    handleClick = (e) => {
        this.props.submitCart()
    }

    render() {
        return <div className="cart-inner">
                Total { this.state.total.toLocaleString('da-DK') } { this.state.currency }
                <div>
                    { this.props.children }
                </div>
            </div>
    }
}
/**
 * Experimental
 */
store.subscribe(() => {
    // console.log(store.getState().cart)
})

const stateProps = (state) => (
    {
        cart: state.cart,
        settings: state.settings
    }
)

const dispatchProps = (dispatch) => (
    {
        submitCart: () => dispatch({
            type: 'SUBMIT_CART'
        })
    }
)

export default connect(stateProps)(Cart);

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

    handleClick = (e) => {
        this.props.submitCart(this.state.products)
    }

    render() {
        return <div className="cart-inner">
                Total { this.state.total.toLocaleString('da-DK') } { this.state.currency }
                <div>
                    <button onClick={ this.handleClick.bind(this) }>Submit</button>
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

const dispatchProps = (dispatch) => (
    {
        submitCart: (products) => dispatch({
            type: 'SUBMIT_CART',
            products
        })
    }
)

export default connect(stateProps,
    dispatchProps)(Cart);

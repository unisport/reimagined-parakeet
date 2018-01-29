/**
 *
 */
import React from 'react'
import { connect } from 'react-redux'

import { UPDATE_CART } from './../actions/cartactions'

class SizeList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            quantity: 0
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.setState({quantity: e.target.value})
        this.props.updateCart(this.props.id, parseInt(e.target.value), this.props.productId)
    }

    render() {
        return <div>
                <h5>{ this.props.name }</h5>
                <input type="text" onChange={ this.handleChange } />
            </div>
    }
}

const mapDispatch = (dispatch) => (
    {
        updateCart: (sizeId, quantity, productId) => dispatch({
            type: 'UPDATE_CART_ITEM',
            sizeId,
            quantity,
            productId
        })
    }
)

export default connect(null, mapDispatch)(SizeList);

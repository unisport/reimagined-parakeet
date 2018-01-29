/**
 *
 */
import React from 'react'
import { connect } from 'react-redux'

import store from './../store'
import * as actions from './../actions/productactions'

class SizesContainer extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            products: props.products
        }
    }

    componentDidMount() {
        this.props.requestSizes()
    }

    componentWillReceiveProps(nextProps) {
        this.setState({products: nextProps.products})
    }

    render() {
        console.log(this.state)
        return "Sizes"
    }
}
/**
 * Store.dispatch(iREQUEST_PRODUCTS)
 * Dispatches REQUEST_PRODUCTS which is then caugth by
 * the middleware
 */
// store.dispatch(actions.requestSizes())

const mapStateToProps = (state) => (
    {
        products: state.products,
        loading: true
    }
)

const mapDispatchToProps = dispatch => {
    return {
        requestSizes: () => dispatch({
            type: 'REQUEST_SIZES'
        })
    }
}

export default connect(mapStateToProps,
    mapDispatchToProps)(SizesContainer);

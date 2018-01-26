/**
 *
 *
 */
import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import store from './../store'
import * as actions from './../actions/productactions'

import ProductSliderContainer from './ProductSliderContainer'

class ProductsContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            products: props.products,
            loading: true
        }
    }

    componentDidMount() {
        if (this.state.products.length > 0) {
            this.setState({loading: false})
        }
    }

    componentWillReceiveProps(nextProps) {
        if(this.state.products.length < nextProps.products.length) {
            this.setState({
                products: nextProps.products,
                loading: false
            })
        }
    }

    render() {
        return <div className="product-slideri-outer">
            <div>{ this.state.loading ? 'Loading' : 'Done' }</div>
                <div className="product-slider-inner">
                { this.state.products.map((props, i) =>
                    <ProductSliderContainer {...props} key={ i } />) }
                </div>
            </div>
    }
}
/**
 * Store.dispatch(iREQUEST_PRODUCTS)
 * Dispatches REQUEST_PRODUCTS which is then caugth by
 * the middleware
 */
store.dispatch(actions.requestProducts())

const mapStateToProps = (state) => (
    {
        products: state.products,
        loading: true
    }
)

const mapDispatchToProps = dispatch => {
    return {}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductsContainer);

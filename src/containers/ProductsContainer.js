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
            // console.log(nextProps.products)
        }
    }

    render() {
        let products = this.state.products.choices

        return <div className="product-slider-outer">
            <div>{ this.state.loading ? 'Loading' : 'Done' }</div>
                <div className="product-slider-inner">
                { this.state.products.map((props, i) =>
                    <div key={i}>
                    <header><h3>{ props.title }</h3></header>
                    { props.choices.map((choices, j) =>
                        <ProductSliderContainer key={ j } products={ choices.products }
                            id={ choices.id} />
                    )}
                    </div>
                )}
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

const mapDispatchToProps = (dispatch) => {
    return {
        requestProducts: () => dispatch({
            type: REQUEST_PRODUCTS
        })
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductsContainer);

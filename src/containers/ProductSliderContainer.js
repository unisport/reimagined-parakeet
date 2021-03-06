/**
 * ProductSliderContainer
 * @constructor
 * @param {number} id
 * @param {string} title
 *
 * State
 * @product
 */
import React from 'react'
import { connect } from 'react-redux'

import * as actions from './../actions/cartactions'
import Product from './../components/Product'

class ProductSliderContainer extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            id: props.id,
            title: props.title,
            selectedProduct: 0,
            products: new Map()
        }
        this.handleSelect = this.handleSelect.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
    }

    componentDidMount() {
        let map = this.state.products

        this.props.products.map(product =>
            map.set(product.id, product)
        )
        this.setState({products: map})
    }

    handleSelect(id) {
        let product = Object.assign({
            choice_id: this.state.id
        }, this.state.products.get(id))
        this.setState({selectedProduct: product.id})
        this.props.addToCart(product)
    }

    handleRemove() {
        this.props.removeFromCart(this.state.id)
        this.setState({selectedProduct: 0})
    }

    render() {
        let products = []

        this.state.products.forEach((val, key) => {
            products.push(<li key={ key } className="product-item">
                <Product {...val} onSelect={ this.handleSelect } />
            </li>)
        })

        return <div className="product-list-wrapper">
                <ul className="product-list">{ products }</ul>
                <div className="product-selected-item">
                    <h4>Selected Product</h4>
                    { this.state.products.has(this.state.selectedProduct) &&
                        <div>
                            <img src={ this.state.products.get(this.state.selectedProduct).image } />
                            <button onClick={ this.handleRemove }>X</button>
                        </div>
                    }
                </div>
            </div>
    }
}

const dispatchProps = (dispatch) => {
    return {
        addToCart: (product) => dispatch({
            type: 'ADD_ITEM_TO_CART',
            product
        }),
        removeFromCart: (choice_id) => dispatch({
            type: 'REMOVE_CART_ITEM',
            choice_id
        })
    }
}

export default connect(null,
    dispatchProps)(ProductSliderContainer);

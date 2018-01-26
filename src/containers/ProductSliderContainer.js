/**
 * ProductSliderContainer
 * @constructor
 * @param {array} choices
 * @param {number} id
 * @param {string} title
 *
 * State
 * @product
 */
import React from 'react'
import { connect } from 'react-redux'

import Product from './../components/Product'

class ProductSliderContainer extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            choices: props.choices,
            id: props.id,
            title: props.title,
            selectedProduct: 0,
            products: new Map()
        }
        this.handleSelect = this.handleSelect.bind(this)
    }

    componentDidMount() {
        let map = this.state.products

        this.props.choices.map(choices =>
            choices.products.map(product =>
                map.set(product.id, product)
            )
        )
        this.setState({products: map})
    }

    arrayToMap(arr) {
        let map = new Map()
        arr.map(choices =>
            choices.products.map(product =>
                map.set(product.id, product)
            )
        )
        return map
    }

    handleSelect(id) {
        this.setState({selectedProduct: id})
        this.props.addToCart(this.state.products.get(id), this.state.id)
    }

    render() {
        let products = []

        this.state.products.forEach((val, key) => {
            products.push(<li key={ key }>
                <Product {...val} onSelect={ this.handleSelect } />
            </li>)
        })

        return <div>
                <header><h3>{ this.state.title }</h3></header>
                <ul>{ products }</ul>
                <div>
                    <h4>Selected Product</h4>
                    { this.state.products.has(this.state.selectedProduct) &&
                        <div>
                            <img src={ this.state.products.get(this.state.selectedProduct).image } />
                        </div>
                    }
                </div>
            </div>
    }
}

const dispatchProps = (dispatch) => {
    return {
        addToCart: (product, group) => dispatch({
            type: 'ADD_TO_CART',
            product,
            group
        })
    }
}

export default connect(null,
    dispatchProps)(ProductSliderContainer);

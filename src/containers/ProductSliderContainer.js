/**
 * ProductSliderContainer
 * @constructor
 * @param {array} choices
 * @param {number} id
 * @param {string} title
 *
 * State
 * @selectedProduct
 */
import React from 'react'

import Product from './../components/Product'

class ProductSliderContainer extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            choices: props.choices,
            id: props.id,
            title: props.title,
            product: 0
        }
        this.handleSelect = this.handleSelect.bind(this)
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

    handleSelect(e) {
        console.log(e)
    }

    render() {
        let productMap = this.arrayToMap(this.state.choices)
        let products = []
        productMap.forEach((val, key) => {
            products.push(<li key={ key }>
                <Product {...val} onSelect={ this.handleSelect } />
            </li>)
        })

        return <div>
                <header><h3>{ this.state.title }</h3></header>
                <ul>{ products }</ul>
                <div>
                    <h4>Selected Product</h4>
                    
                </div>
            </div>
    }
}

export default ProductSliderContainer;

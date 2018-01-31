/**
 * ProductSlider
 * @param {array} products
 * @param {number} choiceid
 * @param {array} customerselected
 * @param {func} selectProduct
 */
import React from 'react'
import { connect } from 'react-redux'

import { SELECT_PRODUCT } from './../actions/customerselected'

const ProductSlider = (props) => {

    const handleSelect = (product) => {
        props.selectProduct(props.choiceid, product.id)
    }
    // TODO: Move to redux selector or similar
    const customerChoice = (products, choice) => {
        let product = products.find(product => product.choice == choice)
        return product ? product.product : 0
    }

    const getProduct = (products, id) => {
        let product = { name: '' }
        if (id > 0)
            product = products.find(product => product.id == id)

        return product
    }

    return (
        <div className="product-slider-outer">
            <div className="product-list">
                { props.products.map((product, i) =>
                    <div key={ i }>
                        { product.name }
                        <button onClick={ handleSelect.bind(null, product) }>Select</button>
                    </div>
                )}
            </div>
            <div className="product-selected">
                <h3>Selected Kit</h3>
                { getProduct(props.products,
                    customerChoice(props.customerselected,
                        props.choiceid)).name }
                <hr noshade />
            </div>
        </div>
    )
}

const mapState = (state) => (
    {
        customerselected: state.customerselected
    }
)

const mapDispatch = (dispatch) => (
    {
        selectProduct: (choice, product) => dispatch({
            type: 'SELECT_PRODUCT',
            choice,
            product
        })
    }
)

export default connect(mapState,
    mapDispatch)(ProductSlider);

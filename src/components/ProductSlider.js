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
    const productSelector = (products) => {
        let product = products.find(product => product.choice == props.choiceid)
        return product ? product.product : 0
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
                Selected: { productSelector(props.customerselected) }
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

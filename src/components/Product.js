/**
 * Product
 * @param {number} id
 * @param {string} image
 * @param {event} onSelect
 * @param {string} type
 * @param {number} unit_discount
 * @param {number} unit_net_price
 * @param {number} unit_price
 */
import React from 'react'
import PropTypes from 'prop-types'

const Product = (props) => {
    // console.log(props)
    return <div>
            <h4>{ props.name }</h4>
            <button onClick={(e) => console.log(e)}>Select</button>
        </div>
}

export default Product;

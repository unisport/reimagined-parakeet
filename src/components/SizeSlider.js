/**
 *
 */
import React from 'react'
import { connect } from 'react-redux'

import { SELECT_SIZES } from './../actions/sizesactions'


const SizeSlider = (props) => {

    const handleChange = (size) => {
        props.selectSize(props.product, size)
    }

    return (
        <div className="size-slider-outer">
            { props.sizes.map((size, i) => {
                    return <div key={ i }>
                        <header>{ size.name }</header>
                        <input type="number" onChange={ handleChange.bind(null, size.id) }
                            min="0" max={ size.in_stock } />
                    </div>
                })
            }
        </div>
    )
}

const mapState = (state) => (
    {
        customersizes: state.customersizes
    }
)

const mapDispatch = (dispatch) => (
    {
        selectSize: (product, size) => dispatch({
            type: 'SELECT_SIZE',
            product,
            size
        })
    }
)

export default connect(mapState,
    mapDispatch)(SizeSlider);

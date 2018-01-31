/**
 *
 */
import React from 'react'
import { connect } from 'react-redux'

import { SELECT_SIZES } from './../actions/sizesactions'
import SizeField from './../components/SizeField'

const SizeSlider = (props) => {
    
    return (
        <div>
            { props.sizes.map((size, i) => {
                return <div key={ i }>
                        <SizeField {...size} product={ props.product } />
                    </div>
                }
            )}
        </div>
    )
}

export default connect()(SizeSlider);

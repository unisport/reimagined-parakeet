/**
 *
 */
import React from 'react'
import { connect } from 'react-redux'

import * as actions from './../actions/sizesactions'
import SizeSlider from './../components/SizeSlider'

class SizesContainer extends React.Component {

    componentDidMount() {
        this.props.requestSizes()
    }

    render() {
        return <div>
                { this.props.sizes.map((size, i) => {
                        return <div className="size-wrapper" key={ i }>
                            <header>{ size.title }</header>
                            { size.products.map((product, j) => {
                                    return <div className="product-wrapper" key={ j }>
                                        <header>{ product.name }</header>
                                        <SizeSlider sizes={ product.sizes }
                                            product={ product.id } />
                                    </div>
                                }
                            )}
                        </div>
                    }) 
                }
            </div>
    }
}

const mapState = (state) => (
    {
        sizes: state.sizes
    }
)

const mapDispatch = dispatch => {
    return {
        requestSizes: () => dispatch({
            type: 'REQUEST_SIZES'
        })
    }
}

export default connect(mapState,
    mapDispatch)(SizesContainer);

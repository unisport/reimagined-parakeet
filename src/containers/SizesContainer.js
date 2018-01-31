/**
 *
 */
import React from 'react'
import { connect } from 'react-redux'

import * as actions from './../actions/sizesactions'

class SizesContainer extends React.Component {

    componentDidMount() {
        this.props.requestSizes()
    }

    render() {
        console.log(this.props)
        return <div className="size-wrapper">Hello</div>
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

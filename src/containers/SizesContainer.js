/**
 *
 */
import React from 'react'
import { connect } from 'react-redux'

import * as actions from './../actions/sizesactions'

class SizesContainer extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            sizes: props.sizes,
            loading: true
        }
    }

    componentDidMount() {
        this.props.requestSizes()
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.sizes.length > 0) {
            this.setState({
                sizes: nextProps.sizes,
                loading: false
            })
        }
    }

    render() {
        console.log(this.state.sizes)
        return "Sizes"
    }
}

const mapStateToProps = (state) => (
    {
        sizes: state.sizes,
        loading: true
    }
)

const mapDispatchToProps = dispatch => {
    return {
        requestSizes: () => dispatch({
            type: 'REQUEST_SIZES'
        })
    }
}

export default connect(mapStateToProps,
    mapDispatchToProps)(SizesContainer);

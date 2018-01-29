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
            products: props.products
        }
    }

    componentDidMount() {
        this.props.requestSizes()
    }

    componentWillReceiveProps(nextProps) {
        this.setState({products: nextProps.products})
    }

    render() {
        console.log(this.state)
        return "Sizes"
    }
}

const mapStateToProps = (state) => (
    {
        products: state.products,
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

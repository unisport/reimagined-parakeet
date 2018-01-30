/**
 *
 */
import React from 'react'
import { connect } from 'react-redux'

import * as actions from './../actions/sizesactions'

import SizeList from './../components/SizeList'

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
        let sizes = this.state.sizes.map((size, i) =>
            <div key={ i }>
                <header>{ size.title }</header>
                { size.products.map((product, j) =>
                    <div key={ j } className="size-grid">
                        <h4>{ product.name }</h4>
                    { product.sizes.map((size, k) =>
                        <SizeList {...size} key={ k } productId={ product.id } />
                    )}
                    </div>
                )}
            </div>
        )
        return <div className="size-wrapper">{ sizes }</div>
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

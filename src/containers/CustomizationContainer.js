/**
 *
 */
import React from 'react'
import { connect } from 'react-redux'

import {
    REQUEST_CUSTOMIZATIONS,
    ADD_CUSTOMIZATION
} from './../actions/productactions'
import Customization from './../components/Customization'

class CustomizationContainer extends React.Component {

    componentDidMount() {
        this.props.requestCustomizations()
    }

    render() {
        return <div>
                { this.props.customizations.map((customization, i) => {
                        return <div key={ i }>
                                <header>{ customization.title }</header>
                                { customization.products.map((product, j) => {
                                        return <div key={ j }>
                                                <header>{ product.name }</header>
                                                <Customization sizes={product.sizes}
                                                    customizations_available={ product.customizations_available }
                                                    product={ product.id } />
                                            </div>
                                    }
                                )}
                            </div>
                    }
                )}
            </div>
    }
}

const mapDispatch = (dispatch) => {
    return {
        requestCustomizations: () => dispatch({
            type: 'REQUEST_CUSTOMIZATIONS'
        })
    }
}

const mapState = (state) => (
    {
        customizations: state.customizations
    }
)

export default connect(mapState,
    mapDispatch)(CustomizationContainer);

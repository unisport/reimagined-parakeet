/**
 *
 */
import React from 'react'
import { connect } from 'react-redux'

import { REQUEST_CUSTOMISATION } from './../actions/productactions'
import Customisation from './../components/Customisation'

class CustomisationContainer extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
            productGroups: []
        }
    }
    
    componentWillMount() {
        this.props.requestCustomisation()
    }

    componentWillReceiveProps(nextProps) {
        this.setState({productGroups: nextProps.customisations.subgroups})
    }

    render() {
        let groups = this.state.productGroups.map((group, i) =>
            <div key={ i }>
                <h4>{ group.title }</h4>
                <div>
                    { group.products.map((product, j) => {
                        return <div key={ j }>
                                <Customisation {...product} />
                            </div>
                    })}
                </div>
            </div>
        )

        return <div className="">
                { groups }
            </div>
    }
}

const mapDispatch = (dispatch) => {
    return {
        requestCustomisation: () => dispatch({
            type: 'REQUEST_CUSTOMISATION'
        })
    }
}

const mapState = (state) => (
    {
        customisations: state.customisations
    }
)

export default connect(mapState,
    mapDispatch)(CustomisationContainer);

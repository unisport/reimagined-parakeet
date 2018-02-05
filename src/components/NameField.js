/**
 *
 */
import React from 'react'
import { connect } from 'react-redux'

import { SELECT_CUSTOMIZATION } from './../actions/customercustomizationsactions'

class NameField extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            id: (new Date()).getTime()
        }

        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {
    }

    handleChange(e) {
        this.props.selectCustomization(
            this.props.product,
            this.props.size,
            this.props.type,
            e.target.value,
            this.state.id
        )
        this.setState({name: e.target.value})
    }

    render() {
        return <label>{ this.props.display_name }
                <input type="text" value={ this.state.name }
                    onChange={ this.handleChange } />
            </label>
    }
}

const mapState = (state) => (
    {
        customercustomization: state.customercustomizations
    }
)

const mapDispatch = (dispatch) => (
    {
        selectCustomization: (product, size, customizationtype,
            customizationvalue, id) => dispatch({
                type: 'SELECT_CUSTOMIZATION',
                product,
                size,
                customizationtype,
                customizationvalue,
                id
        })
    }
)

export default connect(mapState,
    mapDispatch)(NameField);

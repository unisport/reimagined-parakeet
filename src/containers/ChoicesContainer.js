/**
 *
 */
import React from 'react'
import { connect } from 'react-redux'

import {
    REQUEST_CHOICES
} from './../actions/choicesactions'

class ChoicesContainer extends React.Component {
    
    componentDidMount() {
        this.props.requestChoices()
    }

    render () {
        return <div>Choices</div>
    }
}

const mapDispatch = (dispatch) => (
    {
        requestChoices: () => dispatch({
            type: 'REQUEST_CHOICES'
        })
    }
)

const mapState = (state) => (
    {
        choices: state.choices
    }
)

export default connect(mapState,
    mapDispatch)(ChoicesContainer);

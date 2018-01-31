/**
 *
 */
import React from 'react'
import { connect } from 'react-redux'

import {
    REQUEST_CHOICES
} from './../actions/choicesactions'
import ProductSlider from './../components/ProductSlider'

class ChoicesContainer extends React.Component {

    componentDidMount() {
        this.props.requestChoices()
    }

    render () {
        return <div>
                { this.props.choices.map((choices, i) => {
                    return <div className="choice-wrapper" key={ i }>
                            <header>{ choices.title }</header>
                            <div className="choices">
                            { choices.choices.map((choice, j) => {
                                    return <div key={ j } className="products">
                                        <header>{ choice.title }</header>
                                        <ProductSlider products={ choice.products }
                                            choiceid={ choice.id }/>
                                    </div>
                                }
                            )}
                            </div>
                        </div>
                    })
                }
            </div>
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
        choices: state.choices,
        customerselected: state.customerselected
    }
)

export default connect(mapState,
    mapDispatch)(ChoicesContainer);

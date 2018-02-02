/**
 *
 */
import React from 'react'
import { connect } from 'react-redux'

import { SELECT_SIZE } from './../actions/sizesactions'

class SizeField extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            quantity: 0
        }

        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {
        if (this.props.customersizes.length > 0) {
            let size = this.props.customersizes.find(size =>
                    size.size == this.props.id
                )
            if (size !== undefined) {
                this.setState({quantity: size.quantity})
            }
        }
    }

    handleChange(e) {
        this.setState({quantity: parseInt(e.target.value)})
        this.props.selectSize(this.props.product, this.props.id,
            parseInt(e.target.value))
    }

    render() {
        return <div>
                <label>{ this.props.name }
                    <input type="number" min="0"
                        max={ this.props.in_stock } value={ this.state.quantity }
                        onChange={ this.handleChange } />
                </label>
            </div>
    }
}

const mapState = (state) => (
    {
        customersizes: state.customersizes
    }
)

const mapDispatch = (dispatch) => (
    {
        selectSize: (product, size, quantity) => dispatch({
            type: 'SELECT_SIZE',
            product,
            size,
            quantity
        })
    }
)

export default connect(mapState,
    mapDispatch)(SizeField);

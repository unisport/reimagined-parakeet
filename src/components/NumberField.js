/**
 *
 */
import React from 'react'

const NumberField = (props) => {
    // console.log(props)
    return (
        <label>{ props.display_name }
            <input type="number" />
        </label>
    )
}

export default NumberField;

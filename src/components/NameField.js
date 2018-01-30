/**
 *
 */
import React from 'react'

const NameField = (props) => {
    return (
        <label>{ props.display_name }
            <input type="text" />
        </label>
    )
}

export default NameField;

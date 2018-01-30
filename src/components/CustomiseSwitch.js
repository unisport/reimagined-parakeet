/**
 *
 */
import React from 'react'

const CustomiseSwitch = (props) => {
    let options = props.options.map((opt, i) =>
        <label key={ i }>{ opt.display_name }
            <input type="radio" name={ `logo-${ props.id }`} />
        </label>
    )

    return (
        <div>
            { options }
        </div>
    )
}

export default CustomiseSwitch;

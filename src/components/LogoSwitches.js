/**
 *
 */
import React from 'react'

const LogoSwitches = (props) => {
    console.log(props)
    return (
        <div>
            { props.options.map((option, i) =>
                <div key={ i }>
                    <label>{ option.display_name }
                        <input type="radio" name={`logo-${props.product}`} />
                    </label>
                </div>
            )}
        </div>
    )
}

export default LogoSwitches;

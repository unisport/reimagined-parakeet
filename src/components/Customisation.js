/**
 *
 */
import React from 'react'

import CustomiseSwitch from './CustomiseSwitch'

const Customisation = (props) => {
    let switches = props.customizations_available.filter(cust =>
        ['club_logo', 'sponsor_logo', 'unisport_logo'].includes(cust.type) == true
    )

    return (
        <div>
            <h4>{ props.name }</h4>
            { switches.length > 0 &&
                <CustomiseSwitch options={ switches } id={ props.id } />
            }
            <ul>
                { props.sizes.map((size, i) =>
                    <li key={ i }>
                        { size.name }
                        
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Customisation;

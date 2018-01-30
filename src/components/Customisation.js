/**
 *
 */
import React from 'react'

import CustomiseSwitch from './CustomiseSwitch'
import NameField from './NameField'
import NumberField from './NumberField'

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
                        { props.customizations_available.filter(cust =>
                            ['name', 'number'].includes(cust.type) == true
                        ).map((cust, i) => {
                                if (cust.type == 'name') {
                                    return <NameField key={ i } {...cust} id={ props.id } />
                                } else if(cust.type == 'number') {
                                    return <NumberField key={ i } {...cust} id={ props.id } />
                                }
                            }
                        )}
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Customisation;

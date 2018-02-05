/**
 *
 */
import React from 'react'
import { connect } from 'react-redux'

import { SELECT_CUSTOMIZATION } from './../actions/customercustomizationsactions'
import NameField from './NameField'
import NumberField from './NumberField'
import LogoSwitches from './LogoSwitches'

const Customization = (props) => {
    let switches = props.customizations_available.filter(cust =>
        ['club_logo', 'sponsor_logo', 'unisport_logo'].includes(cust.type) == true
    )
    let inputs = props.customizations_available.filter(cust =>
        ['name', 'number'].includes(cust.type) == true
    )

    return (
        <div>
            { switches.length > 0 &&
                <div><LogoSwitches options={switches} product={ props.product } /></div>
            }
            <div>
                { props.sizes.map((size, i) => 
                        <div key={ i }><header>{ size.name }</header>
                            { Array.apply(null, Array(size.quantity)).map((j, k) => {
                                    return <div key={ k }>
                                            { props.customizations_available.filter(cust =>
                                                    ['name', 'number'].includes(cust.type) == true
                                                ).map((cust, i) => {
                                                    if (cust.type == 'name') {
                                                        return <NameField key={ i } {...cust}
                                                                product={ props.product }
                                                                size={ size.id } />
                                                    } else if (cust.type == 'number') {
                                                        return <NumberField key={i} {...cust}
                                                                product={ props.product }
                                                                size={ size.id } />
                                                    }
                                                })
                                            }
                                        </div>
                                }
                            )}
                        </div>
                    )
                }
            </div>
        </div>
    )
}

const mapDispatch = (dispatch) => (
    {
        selectCustomization: (product, size, customizationtype,
            customizationvalue) => dispatch({
                type: 'SELECT_CUSTOMIZATION',
                product,
                size,
                customizationtype,
                customizationvalue
        })
    }
)

export default connect(null,
    mapDispatch)(Customization);

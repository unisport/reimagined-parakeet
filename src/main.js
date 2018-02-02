/**
 *
 */
import React from 'react'
import {
    HashRouter as Router,
    Route,
    Switch,
    Link,
    withRouter
} from 'react-router-dom'
import { connect } from 'react-redux'

import ChoicesContainer from './containers/ChoicesContainer'
import SizesContainer from './containers/SizesContainer'
import CustomizationContainer from './containers/CustomizationContainer'

const Main = (props) => {

    const handleSubmit = e => {
        /* Dispatch action based on pathname
         * eg from products -> sizes -> customisation */
        switch (props.location.pathname) {
            default:
            case '/':
                props.submitSelection()
                break;
            case '/sizes':
                props.submitSizes()
                break;
            
        }
        /**
         * Redirect user to next step in flow
         */
        if (props.routes.includes(props.location.pathname)) {
            let indx = props.routes.findIndex((path) => 
                path == props.location.pathname
            )
            /* TODO: handle index to avoid undefined */
            props.history.push(props.routes[indx + 1])
        }
    }

    return (
        <section>
            <header>
                <nav>
                    <ul>
                        <li><Link to="/">Choices</Link></li>
                        <li><Link to="/sizes">Sizes</Link></li>
                        <li><Link to="/customization">Customization</Link></li>
                    </ul>
                </nav> 
            </header>
            <main>
                <Route exact path="/" component={ ChoicesContainer } />
                <Route exact path="/sizes" component={ SizesContainer } />
                <Route exact path="/customization" component={ CustomizationContainer } />
            </main>
            <aside>
                Cart goes here
            </aside>
        </section>
    )
}

const mapDispatch = dispatch => {
    return {
        submitSelection: () => dispatch({
            type: 'SUBMIT_SELECTION'
        }),
        submitSizes: () => dispatch({
            type: 'SUBMIT_SIZES'
        })
    }
}

export default withRouter(connect(null, mapDispatch)(Main))

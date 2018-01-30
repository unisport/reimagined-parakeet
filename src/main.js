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

import ProductsContainer from './containers/ProductsContainer'
import SizesContainer from './containers/SizesContainer'
import CustomisationContainer from './containers/CustomisationContainer'
import Cart from './components/Cart'

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

        if (props.routes.includes(props.location.pathname)) {
            let indx = props.routes.findIndex((path) => 
                path == props.location.pathname
            )
            props.history.push(props.routes[indx + 1])
        }
    }

    return (
        <section>
            <header>
                <nav>
                    <ul>
                        <li><Link to="/">Products</Link></li>
                        <li><Link to="/sizes">Sizes</Link></li>
                        <li><Link to="/customisation">Customisation</Link></li>
                    </ul>
                </nav> 
            </header>
            <main>
                <Route exact path="/" component={ ProductsContainer } />
                <Route exact path="/sizes" component={ SizesContainer } />
                <Route exact path="/customisation" component={ CustomisationContainer } />
            </main>
            <aside>
                <Cart>
                    <button onClick={ handleSubmit }>Submit</button>
                </Cart>
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

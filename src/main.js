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
        props.submitCart()
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
        submitCart: () => dispatch({
            type: 'SUBMIT_CART'
        })
    }
}

export default withRouter(connect(null, mapDispatch)(Main))

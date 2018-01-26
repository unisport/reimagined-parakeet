/**
 *
 */
import { render } from 'react-dom'
import React from 'react'
import {
    HashRouter as Router,
    Route,
    Switch,
    Link
} from 'react-router-dom'
import { Provider } from 'react-redux'

import ProductsContainer from './containers/ProductsContainer'
import SizesContainer from './containers/SizesContainer'
import CustomisationContainer from './containers/CustomisationContainer'
import Cart from './components/Cart'

import store from './store'

const NoMatch = () => <div>No match</div>

const Main = () => (
    <Router>
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
            <section>
                <Cart />
            </section>
        </section>
    </Router>
)

render(
    <Provider store={ store }>
        <Main />
    </Provider>,
    document.getElementById('app-root')
)

/**
 *
 */
import { render } from 'react-dom'
import React from 'react'
import {
    HashRouter as Router,
    Route,
    Switch,
    Link,
    withRouter
} from 'react-router-dom'
import { Provider } from 'react-redux'

import Main from './main'

import store from './store'

const NoMatch = () => <div>No match</div>

const routes = [
    '/',
    '/sizes',
    '/customisation'
]
/**
 * Experimental
 */
store.subscribe(() => {
    let title = ""
    document.title = `${title} - Teamsport`
})

const App = (props) => {
    return (
        <Router>
            <Main routes={ props.routes } />
        </Router>
    )
}

render(
    <Provider store={ store }>
        <App routes={ routes } />
    </Provider>,
    document.getElementById('app-root')
)

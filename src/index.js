import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

import configureStore from './store/configureStore'
import { startShowTickets } from './actions/tickets'

const store = configureStore()
store.subscribe(() => {
    console.log(store.getState())
})

// const ticket = {
//     department: "technical",
//     id: "1",
//     message: "Hello",
//     name: "Banty",
//     priority: "High"
// }
store.dispatch(startShowTickets())

const app =(
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'))
serviceWorker.unregister()

import { createStore, combineReducers, applyMiddleware } from 'redux'
import ticketReducers from '../reducers/tickets'
import thunk from 'redux-thunk'

const configureStore = () => {
    const store = createStore(combineReducers({
        tickets: ticketReducers
    }), applyMiddleware(thunk))
    return store
}

export default configureStore
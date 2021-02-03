import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunkMiddleware from 'redux-thunk'
import mailReducer from './mail-reducer'
import appReducer from './app-reducer'

let rootReducer = combineReducers({
        mail: mailReducer,
        app: appReducer
    }
)

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

window.store = store

export default store
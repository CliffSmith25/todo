import { createStore } from 'redux'
import todoApp from './reducers/list-reducers'

export default createStore(todoApp, window.STATE_FROM_SERVER)

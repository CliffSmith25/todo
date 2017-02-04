import { createStore } from 'redux'
import todoApp from './reducers/reducers-test'
import { addTodo, toggleTodo, setVisibilityFilter, VisibilityFilters } from './actions/list-actions'

let store = createStore(todoApp, window.STATE_FROM_SERVER)

console.log(store.getState())

let unsubscribe = store.subscribe(() => {
  console.log(store.getState())
})

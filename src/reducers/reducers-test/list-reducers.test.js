import * as types from '../../actions/list-actions.js'
import reducer from '../list-reducers'

test('tests that the reducer sets the initial state correctly', () => {
  const initialState = reducer(undefined, {})
  expect(initialState).toEqual({ visibilityFilter: 'SHOW_ALL', todos: [] })
})

test('tests that the add action is handled correctly', () => {
  const newState = reducer(undefined, { type: types.ADD_TODO, text: 'new item'})
  expect(newState).toEqual(
    {
      'todos': [{
                'completed': false,
                'text': 'new item'
              }],
      'visibilityFilter': types.VisibilityFilters.SHOW_ALL
      }
    )
})

test('toggle visibilty action', () => {
  const state = reducer(undefined, { type: types.ADD_TODO, text: 'new item'})
  const newState = reducer(state, { type: types.SET_VISIBILITY_FILTER, filter: types.VisibilityFilters.SHOW_ACTIVE })
  expect(newState).toEqual(
    {
      'todos': [{
                'completed': false,
                'text': 'new item'
              }],
      'visibilityFilter': types.VisibilityFilters.SHOW_ACTIVE
      }
    )
})

import { addTodo, toggleTodo, setVisibilityFilter, VisibilityFilters } from '../list-actions'

test('test response from addTodo action', () => {
  const inputText = 'I want to add to the list'
  const act = addTodo(inputText)
  expect(act.type).toBe('ADD_TODO')
  expect(act.text).toBe(inputText)
})

test('test response from setVisibilityFilter action', () => {
  const visFilt = VisibilityFilters.SHOW_COMPLETED
  const act = setVisibilityFilter(visFilt)
  expect(act.type).toBe('SET_VISIBILITY_FILTER')
  expect(act.filter).toBe(visFilt)
})

test('test response from toggleTodo action', () => {
  const index = 5
  const act = toggleTodo(index)
  expect(act.type).toBe('TOGGLE_TODO')
  expect(act.index).toBe(index)
})

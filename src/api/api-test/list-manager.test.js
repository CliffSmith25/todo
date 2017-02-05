import { addNewItemToList, deleteItemFromList, toggleItemDone } from '../list-manager'

test('adding todo to the list should increase list size', () => {
  const list = []
  const listNew = addNewItemToList(list, 'this is a test')
  expect(listNew.length).toBe(1)
  const listNew2 = addNewItemToList(listNew, 'this is a second test')
  expect(listNew2.length).toBe(2)
})

test('deleting should flag the item as deleted', () => {
  let list = []
  list = addNewItemToList(list, 'test 1')
  list = addNewItemToList(list, 'test 2')
  list = addNewItemToList(list, 'test 3')
  list = addNewItemToList(list, 'test 4')
  list = deleteItemFromList(list, 3)
  expect(list[2].deleted).toBe(true)
})

test('marking an item done should toggle done', () => {
  let list = []
  list = addNewItemToList(list, 'test 1')
  list = addNewItemToList(list, 'test 2')
  list = addNewItemToList(list, 'test 3')
  list = addNewItemToList(list, 'test 4')
  list = toggleItemDone(list, 3)
  expect(list[2].done).toBe(true)
  list = toggleItemDone(list, 3)
  expect(list[2].done).toBe(false)
})

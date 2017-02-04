export function addNewItemToList(list, noteText) {
  const todo = {
    todo: noteText,
    done: false,
    id: (isNaN(list.length) ? 1 : list.length + 1),
    deleted: false
  }
  return list.concat([todo])
}

export function deleteItemFromList(list, itemID) {
  let tempList = list.slice()
  const todoItem = tempList.filter(item => {
    return item.id === itemID
  }).map(item => {
    item.deleted = true
  })
  return tempList
}

export function toggleItemDone(list, itemID) {
  let tempList = list.slice()
  const todoItem = tempList.filter(item => {
    return item.id === itemID
  }).map(item => {
    ;(item.done === true ? item.done = false : item.done = true)
  })
  return tempList
}

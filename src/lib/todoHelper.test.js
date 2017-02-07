import {addTodo, findById, toggleTodo} from './todoHelper'

test.skip('findById should return the expected item from an array', () => {

  const startTodos = [
    {id:1, name:'one', isComplete: false},
    {id:2, name:'two', isComplete: false},
    {id:3, name:'three', isComplete: false}
  ]
  const expected = {id:2, name:'two', isComplete: false}
  const result = findById(2, startTodos)
  expect(result).toEqual(expected)
})


test('toggleTodo should toggle the isComplete prop of a todo', () => {

  const startTodo = {id:2,name:'two', isComplete: false}
  const expected = {id:2,name:'two', isComplete: true}
  const result = toggleTodo(startTodo)
  expect(result).toEqual(expected)
})

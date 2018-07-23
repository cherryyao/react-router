export const changeCheck = (todos) => ({ type: 'TOGGLE_TODO', todos})
export const changeContent = (todos) => ({ type: 'CHANGE_TODO', todos })
export const addTodo = (todos) => ({ type: 'ADD_TODO',  todos})
export const filterTodo = (todos,status) => ({ type: 'FILTER_TODO', todos, status})

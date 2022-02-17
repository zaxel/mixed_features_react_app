import { setTodoListAction } from "../../store/todoReducer";

export const getTodoFromServer = () => {
  return dispatch => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=15')
    .then(response => response.json())
    .then(json => dispatch(setTodoListAction(json)))
  }
    
}
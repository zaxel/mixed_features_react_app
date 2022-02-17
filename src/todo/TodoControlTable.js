import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddTodoArea } from "./AddTodoArea";
import { getTodoFromServer } from "./async/getTodoFromServer";
import { setShowAddArea, setIncompleteOnly} from "../store/todoReducer";

let TodoControlTable = () => {
    const dispatch = useDispatch();
    const onlyCompletedHandler = e => dispatch(setIncompleteOnly(e.currentTarget.checked));
    const addNewTodoHandler = () => dispatch(setShowAddArea(true));
    const onLoadTodoClickHandler = () => dispatch(getTodoFromServer());
    const isAddTodoTextareaShown = useSelector(state=>state.todo.showAddTodoTextarea);
    return(
        <form className="search-table" onSubmit={(e)=>e.preventDefault()}>
            <div>
                <div className="search-table__button-cont">
                    <button onClick={onLoadTodoClickHandler}>Load list from server</button>
                    <button onClick={addNewTodoHandler}>Add new todo</button>
                </div>
                {isAddTodoTextareaShown && <AddTodoArea />}
                <div>
                    <input onChange={onlyCompletedHandler} type="checkbox" /><label> Show only not completed</label>
                </div>
            </div>
        </form>
    )
}

export default TodoControlTable;
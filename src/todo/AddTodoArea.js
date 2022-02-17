import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setShowAddArea,  setNewTodoValue, submitNewTodoValue} from "../store/todoReducer";

export const AddTodoArea = () => {
    const dispatch = useDispatch();
    const addButtonRef = useRef(null);
    const newTodoValue = useSelector(state=>state.todo.newTodoValue);
    const onChangeHandler = e => dispatch(setNewTodoValue(e.currentTarget.value));
    const addOnClickHandler = () => dispatch(submitNewTodoValue());
    const onBlurTextareaHandler = () => {
        setTimeout(()=>{
            document.activeElement !== addButtonRef.current && dispatch(setShowAddArea(false));
        })
    }
    const onBlurAddButtonHandler = () => dispatch(setShowAddArea(false));
    return(
        <table>
            <tbody>
                <tr>
                    <td><textarea 
                            value={newTodoValue} 
                            onBlur={onBlurTextareaHandler}
                            onChange={onChangeHandler} 
                            autoFocus
                        ></textarea></td>
                    <td><button 
                        ref={addButtonRef}
                        onBlur={onBlurAddButtonHandler}
                        className="search-table__button-add" 
                        onClick={addOnClickHandler}
                        >Add</button></td>
                </tr>
            </tbody>
        </table>
    )
} 
    

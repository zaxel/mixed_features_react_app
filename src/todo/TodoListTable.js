import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteRowAction, setRowTodoEditorOnId, setRowTodoEditorVal, 
        submitRowTodoEditorVal, completeCheckboxVal } from '../store/todoReducer';
import { scrollbarHandler } from "../servFunctions/scrollbarHandler";


let TodoListTable = () => {
    const rowTodoEditorOnId = useSelector(state=>state.todo.rowTodoEditorOnId);
    const rowTodoEditorVal = useSelector(state=>state.todo.rowTodoEditorVal);
    const dispatch = useDispatch();
    const checkboxHandler = (e, id) => dispatch(completeCheckboxVal({isCompleted: e.target.checked, id})); 
    const deleteButtonHandler = id => dispatch(deleteRowAction(id));
    const rowDescrOnclickHandler = id => dispatch(setRowTodoEditorOnId({id}));
    const rowTextareaChangeHandler = e => dispatch(setRowTodoEditorVal(e.target.value)); 
    const rowNewValueSubmit = () => dispatch(submitRowTodoEditorVal());
    let rows = [];
    let todo = useSelector(state=>state.todo.todo);
    const showOnlyInComplete = useSelector(state=>state.todo.showOnlyInComplete);
    if(showOnlyInComplete) todo = todo.filter(row=>!row.completed);

    todo.forEach(row=>{
        rows.push(
            <tr key={row.id} className="todo__item"> 
                <td className="todo__item-text">{
                        row.id === rowTodoEditorOnId 
                        ? <textarea 
                            onChange={(e)=>rowTextareaChangeHandler(e)} 
                            value={rowTodoEditorVal} 
                            onBlur={rowNewValueSubmit}/> 
                        : <p onClick={()=>rowDescrOnclickHandler(row.id)}>{row.title}</p>
                    }</td>
                <td><input onChange={(e)=>checkboxHandler(e, row.id)} type="checkbox" className="todo__item-iscompleted" checked={row.completed}/></td>
                <td><button onClick={()=>deleteButtonHandler(row.id)} className="todo__item-button">X</button></td>
            </tr>
        )
    })
    useEffect(()=> scrollbarHandler());
    return(
        <div className="products-table">
            <table className="product-stable__cont product-table__table">
                <thead>
                    <tr>
                        <th>What to do</th>
                        <th>Done</th>
                        <th>Del</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        </div>
    )
}

export default TodoListTable;


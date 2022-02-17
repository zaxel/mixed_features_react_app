import { SET_TODO_LIST, DELETE_ROW, SET_SHOW_ADD_TODO_AREA,
         SET_NEW_TODO_VALUE, SUBMIT_NEW_TODO_VALUE, SET_INCOMPLETE_ONLY, 
         SET_EDITOR_ID_AND_VAL, SET_ROW_EDITOR_VAL, SUBMIT_ROW_EDITOR_VAL,
         COMPLETE_CHECKBOX_VAL} from "./types";

const initialValue = {
    todo: [],
    showOnlyInComplete: false,
    showAddTodoTextarea: false,
    rowTodoEditorOnId: null,
    rowTodoEditorVal: '',
    newTodoValue: ''
};
export const todoReducer = (state = initialValue, action) => {
    switch(action.type){
        case SET_TODO_LIST:
            return {
                ...state,
                todo: action.payload
            }
        case DELETE_ROW:
            return {
                ...state, 
                todo: state.todo.filter(row=>row.id!==action.payload)
            }
        case SET_SHOW_ADD_TODO_AREA:
            return {
                ...state,
                showAddTodoTextarea: action.payload
            }
        case SET_NEW_TODO_VALUE:
            return {
                ...state,
                newTodoValue: action.payload
            }
        case SUBMIT_NEW_TODO_VALUE:
            return (state.newTodoValue 
                ? {...state,
                    todo: [...state.todo, 
                     {
                         userId: 999999,
                         id: Date.now(),
                         title: state.newTodoValue,
                         completed: false
                    }],
                    newTodoValue: '',
                    showAddTodoTextarea: false}
                : {...state,
                    showAddTodoTextarea: false})
        case SET_INCOMPLETE_ONLY:
            return {
                ...state,
                showOnlyInComplete: action.payload
            }
        case SET_EDITOR_ID_AND_VAL:
            return {
                ...state,
                rowTodoEditorOnId: action.payload.id,
                rowTodoEditorVal: state.todo.filter(el=>el.id===action.payload.id)[0].title
            }
        case SET_ROW_EDITOR_VAL:
            return {
                ...state,
                rowTodoEditorVal: action.payload
            }
        case SUBMIT_ROW_EDITOR_VAL:
            const rows = state.todo.map(row=>{
                        if(row.id === state.rowTodoEditorOnId){
                            return {
                                 userId: row.userId,
                                 id: row.id,
                                 title: state.rowTodoEditorVal,
                                 completed: row.completed
                            }
                        }else{
                            return row;
                        }
                    })
            return {
                ...state,
                todo: rows,
                rowTodoEditorOnId: null,
                rowTodoEditorVal: ''
            }
        case COMPLETE_CHECKBOX_VAL:
            const rowsForCheckbox = state.todo.map((row)=>{
                if(row.id === action.payload.id){
                    return {
                        userId: row.userId,
                        id: row.id,
                        title: row.title,
                        completed: action.payload.isCompleted
                    }
                }else{ return row }
            })
            return {
                ...state,
                todo: rowsForCheckbox
            }
        default:
            return state;
    }
}

export const setTodoListAction = (payload) => ({type: SET_TODO_LIST, payload});
export const deleteRowAction = (payload) => ({type: DELETE_ROW, payload});
export const setShowAddArea = (payload) => ({type: SET_SHOW_ADD_TODO_AREA, payload});
export const setNewTodoValue = (payload) => ({type: SET_NEW_TODO_VALUE, payload});
export const submitNewTodoValue = (payload) => ({type: SUBMIT_NEW_TODO_VALUE, payload});
export const setIncompleteOnly = (payload) => ({type: SET_INCOMPLETE_ONLY, payload});
export const setRowTodoEditorOnId = (payload) => ({type: SET_EDITOR_ID_AND_VAL, payload});
export const setRowTodoEditorVal = (payload) => ({type: SET_ROW_EDITOR_VAL, payload});
export const submitRowTodoEditorVal = (payload) => ({type: SUBMIT_ROW_EDITOR_VAL, payload});
export const completeCheckboxVal = (payload) => ({type: COMPLETE_CHECKBOX_VAL, payload});

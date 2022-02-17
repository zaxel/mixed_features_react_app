import React from "react";
import TodoControlTable from "./TodoControlTable";
import TodoListTable from "./TodoListTable";

function MainTodo (){
    
    
    return(
        <div className="main todo">
            <div className="main__container">
                <TodoControlTable />
                <TodoListTable />
            </div>
        </div>
    )
}

export default MainTodo;
import { ADD_TODO, DELETE_TODO, COMPLETE_TODO, GET_All_TODOS, GET_COMPLETED_TODOS, GET_UNCOMPLETED_TODOS } from "../constant/todoConstant"
export const addTodo = (todo)=>{
    return {
        type: ADD_TODO,
        payload: todo
    }
}

export const deleteTodo = (id)=>{
    return {
        type: DELETE_TODO,
        payload: id
    }
}

export const completeTodo = (id)=>{
    return {
        type: COMPLETE_TODO,
        payload: id
    }
}

export const getAllTodos = ()=>{
    return {
        type: GET_All_TODOS
    }
}

export const changeTodoState = (todos, id)=>{

    const newTodos = todos.map( (todo)=>{
        if(todo.id === id){
            todo.stat = !todo.stat;
            return todo;
        }
        
    })
    return newTodos;
}


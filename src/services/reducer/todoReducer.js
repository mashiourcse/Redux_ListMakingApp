import { addTodo,deleteTodo,completeTodo,getAllTodo,changeTodoState } from "../action/todoAction";
import {ADD_TODO, DELETE_TODO, COMPLETE_TODO, GET_All_TODOS} from "../constant/todoConstant";

const initialState = {
    todos: []
}
export const reducer = ( state=initialState, action)=>{

    switch(action.type){

        case ADD_TODO:
            return {
                ...state, 
                todos: [...state.todos, action.payload]
            }
        case DELETE_TODO:
            return{
                ...state,
                todos: state.todos.filter( todo=> todo.id!==action.payload)
            }
        case COMPLETE_TODO: 
            return{
                ...state,
                todos: state.todos.map((todo)=>{
                    if(todo.id===action.payload){
                        todo.stat = !todo.stat
                    }
                    return todo;
                })
            }
        case GET_All_TODOS:
            return{
                ...state,
                todos: state.todos
            }
        
            
        
        default:
            return state;
    }
}

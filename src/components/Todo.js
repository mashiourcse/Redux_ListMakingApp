import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { completeTodo, deleteTodo } from '../services/action/todoAction';

export const Todo = (props) => {

    const {name,id,stat, todourl} = props.todo;
    const dispatch = useDispatch();

    const handleDelete = ()=>{
      dispatch(deleteTodo(id));
    }

    const handleComplete = ()=>{
      dispatch(completeTodo(id));
    }
    
    
  return (
    <div className='todo'>
      <li className={`todo-item ${stat? "completed" : ""}`}><a href={todourl} target='_blank'>{name}</a></li>
      <button className='complete-btn' onClick={handleComplete}>
        <i className='fas fa-check'></i>
      </button>
    <button className='trash-btn' onClick={handleDelete}>
      <i className='fas fa-trash'></i>
    </button>
    </div>
  ) 
}
 
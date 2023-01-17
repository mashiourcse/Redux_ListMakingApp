import React, { useEffect, useState } from 'react';
import {  useSelector } from 'react-redux';
import { Todo } from './Todo';

export const TodoList = () => {
  const [todoState,setTodoState] = useState("all");
  const [category, setCategory] = useState("none");
  const {todos} = useSelector( state => state);
  const valueOfTodos = ["all", "none", "completed", "uncompleted"];
  //const categorySelect = ["No Category", "Anime", "Music", "Game", "Movies", "News", "Fitness"];
  const categorySelect = ["No Category", "Anime", "Music", "Game", "Movies", "News", "Fitness","C. prog", "Web Dev"];
  console.log(todoState);


  const handleTodoList = (e)=> {
    console.log(e.target.value);
    setTodoState(e.target.value);
    
  }

  const handleCategory = (e)=>{
    setCategory(e.target.value);
  }
  return (
    <>
    <form>
    <div className="select">
        <select name="todos" className="filter-todo" onChange={handleTodoList}>
        {
          valueOfTodos.map( (value)=>{
            return <option value={value}>{value[0].toUpperCase()+value.substring(1)}</option>;
          })
        } 
        </select>
      </div>

      <div className="select">
        <select name="category" className="filter-todo" onChange={handleCategory}> 
        {
          categorySelect.map( (categry)=>{
            return <option value={categry}>{categry}</option>
          })
        }
        </select>
      </div>
    </form>
    <div className='todo-container'>
      
        <ul className='todo-list'>
          {
            todoState==="none" && todos.map((todo)=>{
              return null;
            })
          }
          {
            todoState==="all" && todos.map( (todo)=>{
              if(todo.category === category)
              return <Todo key={todo.id} todo={todo} />
            })
            
          }
          {
            todoState==="completed" && todos.map( (todo)=>{
              if(todo.stat && todo.category === category)
              return <Todo key={todo.id} todo={todo} />
            })
            
          }
          {
            todoState==="uncompleted" && todos.map( (todo)=>{
              if(!todo.stat && todo.category === category)
              return <Todo key={todo.id} todo={todo} />
            })
            
          }
        </ul>
    </div>
    </>
    
  )
}

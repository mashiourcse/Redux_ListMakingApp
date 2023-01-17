import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../services/action/todoAction';
import 'react-icons/fa';

export const Form = () => {

    const [inputText, setInputText] = useState("");
    const [category,setCategory] = useState("none");
    const [url, setUrl] = useState("");
    const dispatch = useDispatch();
   // const categorySelect = ["No Category", "Anime", "Music", "Game", "Movies", "News"];
   const categorySelect = ["No Category", "Anime", "Music", "Game", "Movies", "News","Fitness","C. prog", "Web Dev"];
    const inputHandler = (e) =>{
        
       setInputText(e.target.value);
       //console.log(inputText);
      }
      const categoryHandler = (e) =>{
        setCategory(e.target.value);
      }
      const urlHandler = (e) =>{
        setUrl(e.target.value)
      }

    const submitTodoHandler = (e)=>{
        console.log(inputText);
        e.preventDefault();
        if(inputText!==""){
          //console.log(category);
          const todo = {id: Math.random(), name: inputText, stat: false, category: category, todourl: url}; // category
          console.log(todo);
          dispatch(addTodo(todo));
          setInputText("");
          setUrl("");
        }
        
        
    }

  return (
    <>
    <div className='form-container'>
    <form >
     
     <div>
      
      <input type="text" placeholder='Put your list item here' className="todo-input" value={inputText} onChange={inputHandler} />
      <input id="urlinput" type="text"  size="4" placeholder={`${url==="" ? "URL": "SAVED"} `} className="todo-input" value={url} onChange={urlHandler} />

       <button className="todo-button" type="submit" onClick={submitTodoHandler}>
        <i className="fas fa-plus-square"></i>
      </button>
      </div>

      <div className="select">
        <select name="category" className="filter-todo" onChange={categoryHandler}>
        {
          categorySelect.map( (categry)=>{
            return <option value={categry}>{categry}</option>
          })
        }
        </select>
      </div>

    </form>
    </div>
    </>
  )
}

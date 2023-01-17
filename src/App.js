import { useState } from 'react';
import './App.css';


// import './mediaquery.css'
import { Form } from './components/Form';
import { TodoList } from './components/TodoList';

function App() {

 
  return (
    <div className="App ">
      <div>
        <header>
          <h1>Personal List</h1>
          
        </header>
        
        <Form  />
       
        <TodoList/>
        <header>
          <h1>&nbsp;</h1>
          
        </header>
      </div>
      
    </div>
  );
}

export default App;

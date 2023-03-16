import React, { useState } from "react";
import ToDoItem from "./setTodoItem";
import './styles/calorie.css'
import calorie from  '../images/calorie.png'
import img from '../images/img.png'


function Calorie() {
  const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");
    const [cal, setCal] = useState(10)
    const [counter, setCounter] = useState(0);
   

  function handleChange(event) {
    const newValue = event.target.value;
    setInput(newValue);
  }

  function addItem() {
    setTodos(prevTodos => {
      console.log(input);
        return [...prevTodos, input];
    });
    setInput("");
    console.log(todos);
  }

  function removeItem(id) {
    setTodos(prevTodos => {
      return prevTodos.filter((item, index) => {
        return index !== id;
      });
    });
  }
    
    function handleCount() {
        setCounter(cal+counter)
    }

  return (
    <div className="container">
      <div className="heading">
              <h1>What did you eat today?</h1>

              <img src={calorie}/>
              
          </div>
          <h1 >Total Calories={counter} cal </h1>
      <div className="form">
        <input type="text" value={input} placeholder="Enter Food" onChange={handleChange} />
        <button  onClick={ () => { addItem(); handleCount();} }>
          <span>Search</span>
        </button>
      </div>
      <div>
        <ul>
                  {todos.map((todoItem, index) => {
                      return (
                          
                          <div id={index}>
                              <li>
                                  <span>{todoItem}</span>
                                  <span>{cal} cal</span>
                                  </li>
                          </div>
            
            
                      )
                  })}
                  
        </ul>
      </div>
    </div>
  );
}

export default Calorie;

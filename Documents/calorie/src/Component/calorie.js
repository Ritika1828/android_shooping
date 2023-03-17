import React, { useState } from "react";
import ToDoItem from "./setTodoItem";
import styles from './styles/calorie.module.css'
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
        <div className={styles.main}>
        <div className={styles.container}>
        < div className = { styles.heading } >
              <h1 className={styles.head}>What did you eat today?</h1>

              <img className={styles.img} src={calorie}/>
              
          </div>
          <h1 >Total Calories={counter} cal </h1>
            <div className={styles.form}>
        <input className={styles.input} type="text" value={input} placeholder="Enter Food" onChange={handleChange} />
        <button className={styles.button} onClick={ () => { addItem(); handleCount();} }>
          <span className={styles.search}>Search</span>
        </button>
      </div>
      <div>
        <ul>
                  {todos.map((todoItem, index) => {
                      return (
                          
                          <div id={index}>
                              <li className={styles.listitem}>
                                  <span>{todoItem}</span>
                                  <span>{cal} cal</span>
                                  </li>
                          </div>
            
            
                      )
                  })}
                  
        </ul>
      </div>
            </div>
            </div>
  );
}

export default Calorie;

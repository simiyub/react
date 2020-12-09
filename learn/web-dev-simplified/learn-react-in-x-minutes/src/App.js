import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList'
import {v4 as uuidv4} from 'uuid'
import { useState, useRef, useEffect } from 'react';

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

useEffect(()=>{
  const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
  if (storedTodos) setTodos(storedTodos)
}, [])//this use effect will run once to 

//runs every time this array of dependencies changes
  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))

  }, [todos])//runs every time this array of dependencies changes


  function toggleTodo(id){
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id == id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  function handleClearTodos(){
    const newTodos = todos.filter(todo =>!todo.complete)
    setTodos
  }

  function handleAddTodo(e){
    const name = todoNameRef.current.value
    if(name === '') return
    setTodos(prevTodos =>{
      return [...prevTodos, {id:uuidv4(),name:name, complete:false}]
    })
    console.log(name)
    todoNameRef.current.value = null
  }
  return (
    <>
    <TodoList todos={todos} toggleTodo = {toggleTodo}/>
    <input ref={todoNameRef} type="text"/>
    <button onClick={handleAddTodo}>Add Todo</button> 
    <button onClick={handleClearTodos}>Clear Completed</button>
    <div>{todos.filter(todo=>!todo.complete).length}</div>
    <div>0 left to do</div>
    </>
  );
}

export default App; 

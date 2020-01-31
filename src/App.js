import React from 'react';
import ReactDom from 'react-dom'
import './App.css';
import ToDoItem from './TodoItem'
import todosData from './todosData'

function App() {

 const todoComponent =  todosData.map(function(item) {
    return <ToDoItem key={item.id} text={item.text} completed={item.completed} />
  })

  return(
    <div className="todo-list">
    {todoComponent}
    </div>
  )
}

export default App;

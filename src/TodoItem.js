import React from 'react'
// function ToDoItem(props) {
//     return (
//     <div className="todo-item">
//         <input type="checkbox" checked={props.completed} />
//       <p>{props.text}</p>
//     </div>
//     )
// }


//class based components. 

function TodoItem(props) {
  return (
      <div className="todo-item">
          <input 
              type="checkbox" 
              checked={props.item.completed} 
              onChange={() => props.handleChange(props.item.id)}
          />
          <p>{props.item.text}</p>
      </div>
  )
}

export default TodoItem
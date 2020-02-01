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
class ToDoItem extends React.Component {

   

    render() {
      return (
        <div className="todo-item">
            <input type="checkbox" checked={this.props.completed} />
          <p>{this.props.text}</p>
        </div>
        )
    }
}

export default ToDoItem
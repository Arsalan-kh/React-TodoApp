import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

const Todo = ({ todos, completeTodo, removeTodo,updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });
const submitUpdate=value=>{
  updateTodo(edit.id,value)
  setEdit({
    id:null,
    value:""
  })
}

if(edit.id){
  return <TodoForm edit={edit} onSubmit={submitUpdate}/>
}
  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div
        className="task"
        style={{ textDecoration: todo.isComplete ? "line-through" : "" }}
        key={todo.id}
        onClick={() => completeTodo(todo.id)}
      >
        {todo.text}
      </div>
      <div className="icons">
        <TiEdit onClick={()=> setEdit({id:todo.id,value:todo.text})} className="edit-todo mx-2 " />
        <RiCloseCircleLine
          className="remove-todo "
          onClick={() => removeTodo(index)}
        />
      </div>
    </div>
  ));
};

export default Todo;

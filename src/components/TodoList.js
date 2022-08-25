import React ,{useState}from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'
const TodoList = () => {
 const[todos,setTodos]=useState([])
 
 //Add todo//
 const addTodo=todo=>{
if(!todo.text || /^s*$/.test(todo.text)){
 return;
}
//Add new todo to existing list//
const newTodos=[todo,...todos];
setTodos(newTodos);
}

//Upadate task or todo//
const updateTodo=(todoId,newValue)=>{
    if(!newValue.text || /^s*$/.test(newValue.text)){
        return;
       }

       setTodos(prev=>prev.map(item=>(item.id===todoId ?newValue:item)))
}

//Remove Task//
const removeTodo=index=>{
    const newTodos=[...todos];
    newTodos.splice(index,1);
    setTodos(newTodos);
}

 //Complete task and //
const completeTodo=id=>{
    
    let updateTodos=todos.map(todo=>{
        if(todo.id==id){
            todo.isComplete=!todo.isComplete
        }
        return todo
    })
    return setTodos(updateTodos)
}

    return (
    <div>
        <h1 className='text-center text-white'>What the plan for today</h1>
<TodoForm onSubmit={addTodo} />
   <Todo
   todos={todos}
   completeTodo={completeTodo}
   removeTodo={removeTodo}
   updateTodo={updateTodo}
   />
    </div>
  )
}

export default TodoList
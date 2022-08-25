import React,{useState} from 'react';

const TodoForm = (props) => {
   const [input,setInput]=useState(props.edit?props.edit.value:"");
  

   const handleChange=e=>{
    setInput(e.target.value);
   }
   const handleSubmit =e=>{
    e.preventDefault();
    props.onSubmit({
      id:Math.floor(Math.random()*1000),
      text:input
    })
    //This set input empty the input field when we add todo//
    setInput("")

   }
  const handleClick=()=>{
    if(input===""){
    alert("Please add todo")
    }
  }
   return (
   <div>
<form  onSubmit={handleSubmit} className='d-flex justify-content-center align-items-center todo-form mb-5 mt-5  '>
{
props.edit? (
<>
<input 
  className='todo-input  my-2 '  
   type="text" 
   onChange={handleChange}
   placeholder='Update' 
   value={input}/>
   <button className='todo-button'>Update </button>
   
   </>
)
   :
   (
   <>
   <input 
    className='todo-input  my-2 '  
     type="text" 
     onChange={handleChange}
     placeholder='Add todo' 
     value={input}/>
     <button onClick={handleClick} className='todo-button'>Add </button>
     </>
     )

}

</form>

   </div>
  )
}

export default TodoForm
import React, {useState} from 'react'
import Button from '@mui/material/Button';
import './App.css';
const App = () => {
  const[type,setType]=useState('');
  const[amount,setAmount]=useState(0);
  const[task,setTask]=useState([])

  const handleType=(e)=>{
    setType(e.target.value);
  }

  const handleAmount=(e)=>{
    setAmount(e.target.value);
  }

  const handleSubmit=()=>{
       
    const newTask={
      id:task.length+1,
      type,
      amount,
    }
    setTask([...task,newTask]);
    setType('');
    setAmount(0);
    console.log(task);
  }

  const handleDelete=(id)=>{
    setTask(task.filter((task)=>task.id!==id));
  }
  return (
    <div className='container'>
    <div>
      <h1>Expense Tracker</h1>
      <div>
       <input type='text' placeholder='Enter type' value={type} onChange={(e)=>handleType(e)} ></input>
      </div>
      <div>
      <input type='number' placeholder='Enter amount' value={amount} onChange={(e)=>handleAmount(e)}></input>
      </div>
      <div>
      <Button variant="contained" onClick={handleSubmit}>Submit</Button>
      </div>
    </div>
    <div>
      {/* <h2>The expense list</h2> */}
      <div>
      <ul>
            {task.map((task) => ( 
              <li key={task.id}>
                {task.type}: {task.amount}
                
                <Button variant="outlined" color='error' onClick={()=>handleDelete(task.id)}>Delete</Button>
              </li>
            ))}
      </ul>

      </div>
    </div>
    </div>
  )
}

export default App
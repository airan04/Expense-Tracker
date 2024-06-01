import React, {useState} from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box'
import { red } from '@mui/material/colors';
// import './App.css';

const App = () => {
  const[type,setType]=useState('');
  const[amount,setAmount]=useState();
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
    <div className='container mx-auto' sx={{ m: 'auto' }} >
    <Box
  display="flex"
  justifyContent="center"
  alignItems="center"
  minHeight="100vh"
  minWidth="100%"
  sx={{ border: 5 }}
    >
    <div>
      <h1 className='lg:bg-red-500 text-4xl font-extrabold' >Expense Tracker</h1>
      <div>
       {/* <input type='text' placeholder='Enter type' value={type} onChange={(e)=>handleType(e)} ></input> */}
       <TextField id="standard-basic" sx={{ m: 'auto' }} label="Enter Type" variant="standard" type='text' placeholder='Enter type' value={type} onChange={(e)=>handleType(e)}/>
      </div>
      <div>
      {/* <input type='number' placeholder='Enter amount' value={amount} onChange={(e)=>handleAmount(e)}></input> */}
      <TextField id="standard-basic" sx={{ m: 'auto',mb:'1rem' }} label="Enter Amount" variant="standard" type='number' placeholder='Enter amount' value={amount} onChange={(e)=>handleAmount(e)}/>
      </div>
      <div>
      <Button variant="contained" sx={{ m: 'auto' }} onClick={handleSubmit}>Submit</Button>
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
    </Box>

    </div>
  )
}

export default App
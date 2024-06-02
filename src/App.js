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
    setAmount('');
    console.log(task);
  }

  const handleDelete=(id)=>{
    setTask(task.filter((task)=>task.id!==id));
  }
  return (
    <>
    
    <div className='mt-10 container mx-auto p-10 border-dashed border-2 border-sky-500'>
      <h1 className='lg:bg-grey-500 text-4xl font-bold m-3' >Expense Tracker</h1>
      <div>
       <input className='m-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-black-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500' type='text' placeholder='Enter type' value={type} onChange={(e)=>handleType(e)} ></input>
      </div>
      <div>
      <input className='m-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-black-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500' type='number' placeholder='Enter amount' value={amount} onChange={(e)=>handleAmount(e)}></input>
      </div>
      <div>
      <button className='m-3 py-2 px-3 me-2 mb-2 text-sm font-medium text-white-200 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-200 dark:hover:text-white dark:hover:bg-gray-700' onClick={handleSubmit} >Submit</button>
      </div>
    </div>
    <div>
      {/* <h2>The expense list</h2> */}
    { task ? 
    (<div className='m-4 container mx-auto p-10 border-dashed border-2 border-sky-500'>
      <ul>
            {task.map((task) => ( 
              <li key={task.id}>
              <div className='m-3'>
                {task.type}: {task.amount}
              </div>
              <div>
                <button className='m-3 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900' onClick={()=>handleDelete(task.id)}>Delete</button>
              </div>
              </li>
            ))}
      </ul>

      </div>
    ): <div>

    </div>}
    </div>

    </>
  )
}

export default App
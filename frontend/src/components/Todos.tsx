import React, { useEffect, useState } from 'react'
import API from '../axios'

const Todos = () => {
    const [todos,setTodos] = useState([])

    const fetchTodos = async()=>{
        try{
            const response = await API.get('/todos')
            setTodos(response)
        }catch(err){
            console.log(err)
        }
    }
    useEffect(()=>{
fetchTodos()
    },[])
    console.log(todos)
  return (
    <div>
      {}
    </div>
  )
}

export default Todos

import React, { useEffect, useState, useRef } from 'react'
import InputTodo from './InputTodo';
import { useAuth } from '../../context/AuthContext';
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../firebase'
import TodoCard from './TodoCard';

export default function UserDashboard() {
  const [todos, setTodos] = useState({})
  const {currentUser} = useAuth()

  useEffect(() => {
    const getTodos = async() => {
      const userRef = doc(db, 'users', currentUser.uid)
      const userSnap = await getDoc(userRef);
      
      if (userSnap.exists()) {
        const userData = userSnap.data()
        
        setTodos(userData.todos)

      }
    }
    
    getTodos()
  }, [])

  return (
    <div className='flex flex-col items-center'>
      <InputTodo todos={todos} setTodos={setTodos}/>
      
      {Object.entries(todos).map(([key, value]) => (
        <TodoCard todo={value} index={key} setTodos={setTodos} todos={todos}/>
      ))}
    </div>
  )
}

/**
 * When a user submits a todo, it will create a doc and setdoc to firebase .
 * Then we will use useEffect on the trigger a function that will update the todos which will print out more cards. 
 * When the add button is pressed, change the state in the todoCard components to trigger a rerender
 * Updating the todos doesn't make sense, because we want our todos data to come from the server not our local list
 * Instead, when our button is pressed, it calls a function to get data from the server, that updates the todos which causes a rerender of the todocards
 * 
 * 
 */

/**
 * I want to update the todo cards, when i add a new todo
 * add new todo -> change db, this will trigger code that pulls info from the db and change the state of todos
 * 
 */

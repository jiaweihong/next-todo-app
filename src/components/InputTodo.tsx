import React, {useState} from 'react'
import { doc, setDoc } from 'firebase/firestore'
import { db } from '../../firebase'
import { useAuth } from '../../context/AuthContext'
import { v4 as uuidv4 } from 'uuid';

export default function InputTodo(props) {
    let {todosRef, todos, setTodos} = props

    const [todo, setTodo] = useState('')

    const {currentUser} = useAuth()

    async function submitTodoHandler() {
        if (!todo) {
            return
        }

        const userRef = doc(db, 'users', currentUser.uid)
        
        const newIndex = uuidv4()

        await setDoc(userRef, {
            'todos': {
                [newIndex]: todo
            }
        }, { merge: true })

        setTodo('')

        const newTodos = {
            ...todos,
            [newIndex]: todo
        }

        console.log(newTodos)

        setTodos(newTodos)
    }

    return (
        <div className='w-1/2 py-10'>
            <input 
                type="text" 
                value={todo} 
                onChange={(e) => {setTodo(e.target.value)}} 
                className='outline-none w-4/5 h-14 p-2 text-lg text-black' 
                placeholder='Finish this app...' 
            />

            <button 
                className='uppercase bg-yellow-500 w-1/5 h-14 text-white font-bold text-lg hover:bg-yellow-600' 
                onClick={submitTodoHandler}
            >
                add
            </button>
        </div>
    )
}

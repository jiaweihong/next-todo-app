
import React, { useState } from 'react'
import { useAuth } from '../../context/AuthContext';
import { doc, setDoc } from 'firebase/firestore'
import { db } from '../../firebase'


export default function TodoCard(props) {
    const {todo, index, setTodos, todos} = props
    const {currentUser} = useAuth()
    
    const [isEditting, setIsEditting] = useState(false)

    const [todoEdit, setTodoEdit] = useState(todo)

    async function editHandler() {
        if (!todoEdit) {
            return
        }
        // update the firebase data
        // get setTodo from parent component, and update  todo state within the component itself so that the changes are reflected locally
        setTodos({...todos, [index]: todoEdit})

        const userRef = doc(db, 'users', currentUser.uid) 
        await setDoc(userRef, {
            todos: {
                [index]: todoEdit
            }
        }, {merge: true})
        


        setIsEditting(!isEditting)
    }


  return (
    <div className='flex items-center justify-between w-1/2 h-14 mb-10 p-4 border-white border-2 '>
        {!isEditting && <p className='text-lg'>{todo}</p>}
        {isEditting && <input className='bg-transparent outline-none' value={todoEdit} onChange={(e) => {setTodoEdit(e.target.value)}}></input>}

        <div className='flex justify-between w-12' onClick={() => {editHandler()}}>
            
            {
                !isEditting ? 
                <i 
                    className="fa-solid fa-pen-to-square cursor-pointer hover:translate-y-[-8px] duration-200"
                /> : 
                <i 
                    className="fa fa-check cursor-pointer " 
                    aria-hidden="true"
                />
            }
            
            <i className="fa-solid fa-trash cursor-pointer hover:translate-y-[-8px] duration-200"/>
        </div>
    </div>
  )
}

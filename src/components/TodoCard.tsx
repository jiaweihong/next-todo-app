import React from 'react'

export default function TodoCard(props: {index: any, todo: any}) {
    const {index, todo} = props

  return (
    <div className='flex items-center justify-between w-1/2 h-14 mb-10 p-4 border-white border-2 '>
        <p className='text-lg'>{index}. {todo}</p>

        <div className='flex justify-between w-12'>
            <i className="fa-solid fa-pen-to-square cursor-pointer hover:translate-y-[-8px] duration-200"></i>

            <i className="fa-solid fa-trash cursor-pointer hover:translate-y-[-8px] duration-200"></i>
        </div>
    </div>
  )
}

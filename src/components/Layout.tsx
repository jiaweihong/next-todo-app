import React from 'react'
import Header from './Header';
import Footer from './Footer';

export default function Layout(props) {
    const {children} = props
  return (
    <div className='flex flex-col h-screen bg-sky-950 text-white'>
        <Header/>
        <main className='flex-1'>
            {children}
        </main>
        <Footer/>
    </div>
  )
}

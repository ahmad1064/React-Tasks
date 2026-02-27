import React from 'react'

const Navbar = () => {
  return (
    <div>
      <header className='max-w-[60rem] m-auto rounded-xl flex justify-between items-center text-white/80 text-lg p-4 bg-black/90'>
        <h1><span className='text-[tomato] text-2xl font-bold'>B</span>rand</h1>
        <div className='flex gap-5'>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
        </div>
        <button className='bg-white text-blue-800 px-4 py-1 rounded-lg font-bold'>Login</button>
      </header>
    </div>
  )
}

export default Navbar

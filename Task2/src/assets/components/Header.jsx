import React from 'react'
import Button from './Button'

const Header = () => {
  return (
    <div className='max-w-[40rem] text-center m-auto my-20'>
      <h1 className='text-5xl font-serif font-bold leading-tight'>The best way to Learn <span className='bg-[tomato] rounded-2xl p-0.5'>reacts</span> from Ahmad</h1>
      <p className="text-gray-600 text-lg mt-6">
         React lets you create dynamic and reusable interfaces quickly.  
         A little practice daily can make you master it in no time.  
         Start learning and build amazing projects with Ahmad.
      </p>
      <Button title="Send Message"/>
    </div>
  )
}

export default Header

import React from 'react'

const Button = (props) => {
  return (
    <div>
      <button className='text-blue-800 px-4 py-2 mt-6 rounded-lg font-bold bg-pink-400'>{props.title}</button>
    </div>
  )
}

export default Button

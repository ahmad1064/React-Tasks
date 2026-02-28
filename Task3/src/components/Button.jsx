import React from 'react'

const Button = (props) => {
  return (
    <div>
      <button className='bg-blue-400 px-3 py-2 rounded-full mt-5'>{props.text}</button>
    </div>
  )
}

export default Button

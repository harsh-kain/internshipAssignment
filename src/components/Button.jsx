import React from 'react'

const Button = ({
  btn,
  className="",
  width ="w-32 md:w-36"
}) => {
  return (
    <button className={` ${className === "" ? width : className }  bg-blue-600 text-white text-base py-2 px-4 rounded-lg `}>{btn}</button>
  )
}

export default Button
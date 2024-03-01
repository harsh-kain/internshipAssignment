import React from 'react'

const Heading = ({
  heading,
  className = "",
  font = 'text-xl font-medium md:text-2xl lg:text-3xl mt-5'
}) => {

  return (
    <h1 className={`from-neutral-700 mt-7 md:mt-12 ${className ? font : className } `}
    >{heading}</h1>
  )
}

export default Heading

// ${ className ? 'text-xl font-medium md:text-4xl lg:text-5xl mt-5' : 'text-4xl' }
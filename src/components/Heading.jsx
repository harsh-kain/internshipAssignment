import React from 'react'

const Heading = ({heading}) => {
  return (
    <h1 className={`from-neutral-700 text-xl font-medium md:text-4xl lg:text-5xl mt-5`}>{heading}</h1>
  )
}

export default Heading
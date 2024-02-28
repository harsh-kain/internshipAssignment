import React from 'react'

const Container = ({children}) => {
  return (
    <div className='w-full max-w-[1300px] flex justify-center items-start flex-col h-auto  p-4 '>
        {children}
    </div>
  )
}

export default Container
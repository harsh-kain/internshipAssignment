import React from 'react'

const Tools = () => {
    const tools = [
        {"title" : "Tools", "path" : "/"}, 
        {"title" : "AWS Builder", "path" : "/"}, 
        {"title" : "Start Build", "path" : "/"}, 
        {"title" : "Build Supplies", "path" : "/"}, 
        {"title" : "Tooling", "path" : "/"}, 
        {"title" : "BlueHosting", "path" : "/"}, 
    ]
  return (
    <div className='flex justify-center items-center flex-wrap'>
        {tools.map((items) => (
            <h4 className='bg-gray-100 m-1 py-1 px-2 rounded-lg text-sm md:text-base md:mx-2'>{items.title}</h4>
        ))}
    </div>
  )
}

export default Tools
import React from 'react'
import Button from './Button'
const Cards = () => {
  return (
    <div className='w-full flex justify-center items-center flex-wrap'>
      <div className="cards bg-gray-50 flex justify-center items-center flex-col p-2 w-80 m-5 rounded-lg">

        <img src="https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ax2xncFBKe1xE2EsxdvElceh8oIqKj5N0jH4NJTiBcahukOzPxx4h1z6yHWL5iAGwcZziaBWfUhJnOIkYfeTkuKTAQ3cZ0jcc19S7zOzX3YtV8qd2foEnwflcvKEK8-iqw~VegstF5Nw8QROw9i36ihQaXHBsSdmfGb7V~XdDUKn2fabEOEcm2tN9ETF0zbCn6Tq~PYk9pxyghi5P3ugATGWGP8ljAH8tlJzjgbGXnUBNNTS4sfQDZNsmBvFmdtbDb28LeFrh~MRRFxi7hGf1M9mBH8gyb7qPYFk0pRsrwIdNrDPTsn0IaF8FPwAR8zL3wCBUlfMgzxP1E-gqRbjxQ__" alt="" className='w-40 md:w-52 lg:w-60 object-cover'/>

        <div className="offers flex justify-center items-center mt-5">
          <span className='bg-blue-100 py-1 px-2 rounded-md text-blue-800 mx-1 text-xs md:text-sm'>20% Off</span>
          <span className='bg-blue-100 py-1 px-2 rounded-md text-blue-800 mx-1 text-xs md:text-sm'>Limited time</span>
        </div>

        <h4 className='mt-2'>Webbuilder 1</h4>
        <p className='text-sm md:text-base my-2'>Lorem ipsum, dolor sit amet consectetur </p>
        <div className="price flex justify-center items-center mb-3">
          <span className='text-xl mr-3'>$38.86</span>
          <span className='text-base mr-3 text-gray-400'>$48.86</span>
          <span className='text-base mr-3 text-red-400'>(20% Off)</span>
        </div>
        <Button btn="View Deal"/>
      </div>

      

    </div>
  )
}

export default Cards
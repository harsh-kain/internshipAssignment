import React from 'react'

const StatusBar = () => {
  return (
    <div className='flex justify- items-start w-full my-5 flex-col border-y-2 border-gray-300 md:flex-row  md:p-2'>

        <div className=" flex justify-start items-start w-full flex-col md:flex-row md:justify-start md:items-center md:w-[75%]">

            <div className='my-1 md:mr-6 flex justify-center items-center cursor-pointer'>
                <i className="las la-check-circle text-xl mx-2"></i>
                <span>Last Updated - February 22,2020</span>
            </div>

            <div className='my-1 md:mr-6 flex justify-center items-center cursor-pointer'>
                <i className="las la-exclamation text-xl mx-2"></i>
                <span>Advertising Disclosure</span>
            </div>
        </div>

        <div className=" my-1 md:mr-6 flex justify-start items-center w-full  cursor-pointer md:w-[25%]">
            <i className="las la-angle-down text-xl mx-2"></i>
            <span>Top Relevant</span>
        </div>
    </div>
  )
}

export default StatusBar
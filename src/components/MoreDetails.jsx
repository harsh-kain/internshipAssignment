import React from 'react'
import { data } from '../utils/Data'
const MoreDetails = ({data}) => {
    return (
        <div className={`w-full my-4 flex justify-center items-start flex-col p-3 md:p-0 $`} id='hidden'>

            <div className='w-full bg-red-100 rounded-lg md:ml-12 ' >

                <div className="content  py-2  rounded-lg">
                    {data.extra_content.map((item, index) => {

                        return <div className="innerContent my-2 flex justify-start items-center" key={index}>
                            <span className='bg-white text-[#1B88F4] mx-2 py-2 px-4 rounded-lg text-lg'>{item.rating}</span>
                            <h6>{item.feature}</h6>
                        </div>
                    })}
                </div>

            </div>

            <div className='my-4'>
                <h5>Why we love it</h5>
                <div className=' flex justify-start items-start flex-col'>
                    {data.why_we_love_it.map((item, index) => (<div className='flex justify-center items-center mt-3' key={index}>
                        <span className='mr-2 bg-blue-100 text-[#0855A1] w-6 h-6 flex justify-center items-center rounded-full p-4'><i className="las la-check"></i></span>
                        <h5>{item}</h5>
                    </div>))}

                </div>
            </div>
        </div>
    )
}

export default MoreDetails
import React, { useState } from 'react'
import Button from './Button'
import { data } from '../utils/Data'



const DetailsSection = () => {

    const [showClose, setShowClose] = useState(true)
    const { } = data
    return (
        <>
            {data.map((items) => {

                return <div className='w-full h-auto rounded-lg bg-slate-50 flex justify-start items-start flex-col mt-8 relative md:flex-row  py-3' key={items.id}>

                    {items.tag && <div className="tag bg-orange-400 p-2 rounded-r-lg z-10 flex justify-center items-center translate-y-[-30px] md:absolute">

                        {items.tag === "Best Choice" ? <i className="las la-trophy text-1xl text-white mx-1 md:text-2xl"></i> : <i className="las la-gem text-1xl text-white mx-1 md:text-2xl"></i>}

                        <span className='text-white text-sm md:text-base'>{items.tag}</span>
                    </div>}

                    <div className="left p-3 w-full mt-10 flex justify-center items-center flex-col relative md:mt-20 md:w-[20%]">

                        <span className='absolute top-[-30px] left-2 text-2xl border-2 border-slate-600 bg-white rounded-full p-3 w-10 h-10 flex justify-center items-center md:translate-x-[-10px]'>{items.id}</span>

                        <img src={items.img} alt={items.img_content} />

                        <h6 className='my-3 text-md'>{items.img_content}</h6>
                    </div>

                    <div className="middle md:ml-4 md:pb-14 md:mt-20 md:w-[60%]">

                        <p className='my-3 text-base md:text-base'><span className='font-semibold '>{items.title}</span> - {items.content}</p>

                        <h6 className='font-semibold py-2'>Main highlights</h6>
                        <p className='text-base md:text-base'>[What we get] : {items.what_you_get}</p>


                        <div className={`w-full my-4 flex justify-center items-start flex-col p-3 md:p-0 ${showClose && "hidden"}`} id='hidden'>

                            <div className='w-full bg-red-100 rounded-lg md:ml-12 ' >

                                <div className="content  py-2  rounded-lg">
                                    {items.extra_content.map((item,index) => {

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
                                    {items.why_we_love_it.map((item,index) => (<div className='flex justify-center items-center mt-3' key={index}>
                                        <span className='mr-2 bg-blue-100 text-[#0855A1] w-6 h-6 flex justify-center items-center rounded-full p-4'><i className="las la-check"></i></span>
                                        <h5>{item}</h5>
                                    </div>))}

                                </div>
                            </div>
                        </div>

                        <button className='pt-2 text-blue-700 flex justify-center items-center' onClick={() => setShowClose(!showClose)}>Show more <span><i className="las la-angle-down text-xl mx-1"></i></span></button>

                    </div>

                    {/* rating section  */}
                    <div className="rating absolute top-[-20px] right-0  rounded-lg bg-blue-200 p-3 flex justify-center items-center flex-col md:rounded-b-lg md:rounded-none md:top-4 md:right-8">
                        <h1 className='text-2xl text-blue-600 md:text-2xl lg:text-3xl'>{items.rating}</h1>
                        <p className='text-base text-blue-600 md:text-1xl lg:text-2xl'>{items.review}</p>
                        <div className="stars flex justify-center items-center ">
                            <i className="lar la-star "></i>
                        </div>
                    </div>

                    <div className='flex justify-center items-center bottom-3 right-3 my-2 w-full md:absolute md:justify-end'>
                        <Button btn="View" />

                    </div>

                </div>

            })}
        </>
    )
}

export default DetailsSection
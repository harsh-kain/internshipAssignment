import React from 'react'

const DetailsSection = () => {
    return (
        <div className='w-full h-auto rounded-lg bg-slate-50 flex justify-between items-start flex-col mt-8 relative md:flex-row  py-3'>

            <div className="tag bg-orange-400 p-2 rounded-r-lg z-10 flex justify-center items-center translate-y-[-30px] md:absolute">
                <i className="las la-trophy text-2xl text-white mx-1"></i>
                <span className='text-white '>Best Choices</span>
            </div>

            <div className="left p-3 w-full mt-5 flex justify-center items-center flex-col relative md:mt-20 md:w-[25%]">
                <span className='absolute top-[-30px] left-2 text-2xl border-2 border-slate-600 bg-white rounded-full p-3 w-10 h-10 flex justify-center items-center md:translate-x-[-10px]'>1</span>

                <img src="https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ax2xncFBKe1xE2EsxdvElceh8oIqKj5N0jH4NJTiBcahukOzPxx4h1z6yHWL5iAGwcZziaBWfUhJnOIkYfeTkuKTAQ3cZ0jcc19S7zOzX3YtV8qd2foEnwflcvKEK8-iqw~VegstF5Nw8QROw9i36ihQaXHBsSdmfGb7V~XdDUKn2fabEOEcm2tN9ETF0zbCn6Tq~PYk9pxyghi5P3ugATGWGP8ljAH8tlJzjgbGXnUBNNTS4sfQDZNsmBvFmdtbDb28LeFrh~MRRFxi7hGf1M9mBH8gyb7qPYFk0pRsrwIdNrDPTsn0IaF8FPwAR8zL3wCBUlfMgzxP1E-gqRbjxQ__" alt="" />

                <h6 className='my-3 text-md'>Builder 1</h6>
            </div>

            <div className="middle md:mt-20 md:w-[50%]">
                <p className='my-3'><span className='font-semibold '>Lorem ipsum dolor sit amet.</span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam explicabo maxime minima blanditiis non quae earum odio corporis nihil corrupti.</p>

                <h6 className='font-semibold py-2'>Main highlights</h6>
                <p>[What we get] : Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi, tempore.</p>

                <button className='pt-2 text-blue-700 flex justify-center items-center'>Show more <span><i className="las la-angle-down text-xl mx-1"></i></span></button>
                <div className="hidden">
                    
                </div>
            </div>

            <div className="right w-full mt-5 flex justify-center items-center flex-col md:w-[25%] md:translate-y-[-30px]">

                <div className="rating rounded-lg bg-blue-200 w-1/2 p-3 flex justify-center items-center flex-col md:w-3/4 md:rounded-b-lg md:rounded-none">
                    <h1 className='text-3xl text-blue-600'>9.8</h1>
                    <p className='text-lg text-blue-600'>Excellent</p>    
                    <div className="stars flex justify-center items-center ">
                        <i className="lar la-star "></i>
                        <i className="lar la-star "></i>
                        <i className="lar la-star "></i>
                    </div>
                </div>
                <button className='bg-blue-600 text-white text-lg p-3 w-9/12 mt-5 rounded-lg md:mt-24'>View</button>
            </div>

        </div>
    )
}

export default DetailsSection
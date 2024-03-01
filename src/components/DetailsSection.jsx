import React, { useState } from "react";
import Button from "./Button";
import { data } from "../utils/Data";
import MoreDetails from "./MoreDetails";

const DetailsSection = () => {

    const [expandedItem, setExpandedItem] = useState(null);

    const toggleAccordion = (itemId) => {
        console.log(itemId);

        if (expandedItem === itemId) {
            console.log("starting");
            setExpandedItem(null);
        } else {
            console.log("second");
            setExpandedItem(itemId);
        }
    };
    return (
        <>
            {data.map((items) => {
                return (
                    <div
                        className="w-full h-auto rounded-lg bg-gray-50 flex justify-start items-start flex-col mt-12 relative md:flex-row  py-3 px-3"
                        key={items.id}
                    >
                        {items.tag && ( <div className="tag bg-orange-400 p-2 rounded-r-lg z-10 flex justify-center items-center translate-y-[-30px] md:absolute">
                                {items.tag === "Best Choice" ? (
                                    <i className="las la-trophy text-1xl text-white mx-1 md:text-2xl"></i>
                                ) : (
                                    <i className="las la-gem text-1xl text-white mx-1 md:text-2xl"></i>
                                )}

                                <span className="text-white text-sm md:text-base">
                                    {items.tag}
                                </span>
                            </div>
                        )}

                        <div className={`left p-3 w-full  flex justify-center items-center flex-col relative md:mt-20 md:w-[20%] ${items.tag ? 'mt-10' : 'mt-16'}`}>
                            <span className="absolute top-[-30px] left-2 text-2xl border-2 border-slate-600 bg-white rounded-full p-3 w-10 h-10 flex justify-center items-center md:translate-x-[-10px]">
                                {items.id}
                            </span>

                            <img src={items.img} alt={items.img_content} className="w-56 md:w-64" />

                            <h6 className="my-3 text-md">{items.img_content}</h6>
                        </div>

                        <div className="middle md:ml-4 md:pb-14 md:mt-20 md:w-[60%] text-justify">
                            <p className="my-3 text-sm md:text-base">
                                <span className="font-semibold ">{items.title}</span> -
                                {items.content}
                            </p>

                            <h6 className="font-semibold py-2 text-base ">Main highlights</h6>
                            <p className="text-sm md:text-base">
                                [What we get] : {items.what_you_get}
                            </p>

                            {expandedItem === items.id && <MoreDetails data={items} />}

                            <button
                                className="pt-2 text-blue-700 flex justify-center items-center"
                                onClick={() => toggleAccordion(items.id)}
                            >
                                {expandedItem ? 'Show less' : 'Show more'}
                                <span>
                                    <i className={`las ${expandedItem ? 'la-angle-up' : 'la-angle-down'} text-xl mx-1`}></i>
                                </span>
                            </button>
                        </div>

                        {/* rating section  */}
                        <div className="rating absolute top-[-30px] right-0  rounded-lg bg-[#F3F9FF] p-3 flex justify-center items-center flex-col max-w-40 min-w-28 md:rounded-b-lg md:rounded-none md:top-4 md:right-3 lg:right-6">
                            <h1 className="text-2xl text-[#074786] md:text-2xl lg:text-3xl">
                                {items.rating}
                            </h1>
                            <p className="text-sm text-[#074786] md:text-1xl">
                                {items.review}
                            </p>
                            <div className="stars flex justify-center items-center ">
                                {/* <i className="lar la-star "></i> */}
                                {[...Array(items.stars)].map((_, index) => (
                                    <i key={index} className="lar la-star text-yellow-600"></i>
                                ))}
                            </div>
                        </div>


                        <div className="flex justify-center items-center bottom-5 right-5 my-2 w-full md:absolute md:justify-end">
                            <Button btn="View" />
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default DetailsSection;

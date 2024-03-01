import React from 'react'
import Button from './Button'
import { cardData } from '../utils/cardData'
const Cards = () => {
  return (
    <div className='w-full flex justify-center items-center flex-wrap'>
      {cardData.map((items, index) => (

        <div className="cards bg-gray-50 flex justify-center items-center flex-col p-2 w-80 m-5 rounded-lg" key={index}>

          <img src={items.img} alt={items.img_content} className='w-40 md:w-36 lg:w-48 object-cover' />

          <div className="offers flex justify-center items-center mt-5 flex-wrap" >
            {items.offer.map((offer, index) => (
              <span key={index} className='bg-blue-100 py-1 px-2 rounded-md text-blue-800 mx-1 text-xs md:text-sm my-2'>{offer}</span>

            ))}
          </div>

          <h4 className='mt-1'>{items.img_content}</h4>

          <p className='text-sm md:text-base my-1'>{items.content} </p>

          <div className="price flex justify-center items-center mb-3">
            <span className='text-xl mr-3'>${items.discountPrice}</span>
            <span className='text-base mr-3 text-gray-400'>${items.originalPrice}</span>
            <span className='text-base mr-3 text-red-400'>({items.offer[0]})</span>
          </div>

          <Button btn="View Deal" className='w-32 md:w-full' />
        </div>
      ))}



    </div>
  )
}

export default Cards
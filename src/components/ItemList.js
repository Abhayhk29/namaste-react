import React from 'react'
import { IMG_URL } from '../utils/constant'

const ItemList = ({items}) => {
  return (
    <div>
        {items.map((item) => (
            <div key={item.id} className='p-2 m-2 border-b-2 border-gray-200 text-left flex'>
                <img src={IMG_URL + item.card.info.imageId} className='w-14 h-auto'/>
                <div>
                    <span className='py-2'> 
                        {item.card.info.name}
                    </span>
                    <span>
                        - ₹ {item.card.info.price / 100}
                    </span>
                </div>
                    <p className='text-xs'>{item.card.info.description}</p>
            </div>
        ))}
    </div>
  )
}

export default ItemList
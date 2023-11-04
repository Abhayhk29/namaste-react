import React from 'react'
import { IMG_URL } from '../utils/constant'
import { useDispatch } from 'react-redux'
import { addItem } from '../utils/cartSlice'

const ItemList = ({items}) => {
    const dispatch = useDispatch();
    const handleAddItem = (item) => {
        // dispatch action
        dispatch(addItem(item))
    }
  return (
    <div>
        {items.map((item) => (
            <div key={item.id} className='p-2 m-2 border-b-2 border-gray-200 text-left flex'>
                <img src={IMG_URL + item.card.info.imageId} className='w-14 h-auto'/>
                <button className='bg-gray-50 cursor-pointer border-black' onClick={() => handleAddItem(item)}>Add</button>
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
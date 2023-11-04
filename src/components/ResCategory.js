import React, { useState } from 'react'
import ItemList from './ItemList'

const ResCategory = ({data, showItem, setShowIndex}) => {
    // console.log(props)

    // const [ showItems, setShowItems] = useState(false)
    const handleLogin = () => {
        setShowIndex()
        // setShowItems(!showItems)
    }
  return (
    <div>
        <div className='w-6/12 mx-auto bg-gray-50 shadow-lg p-4'>   
            <div className=' flex justify-between cursor-pointer' onClick={handleLogin}>
                <span className='font-bold text-lg'>{data.title} ({data.itemCards.length})</span>
                <span>⬇</span>
            </div>
            { showItem &&  <ItemList items={data.itemCards} key="sasasasas" />}
        </div>
    </div>
  )
}

export default ResCategory
// import { useEffect, useState } from 'react'
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import ResCategory from './ResCategory';
import { useState } from 'react';

const RestMenu = () => {

    // const [resData, setResData] = useState([]);
    const {resId} = useParams();

    const [showIndex, setShowIndex] = useState(0)
    // console.log(resId);
    // const fetchMenu = async () => {
    //     const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5904779&lng=73.7271909&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`);
    //     const json = await data.json();
    //     setResData(json?.data?.cards[0]?.card?.card?.info)
    //     console.log(json.data.cards[0].card.card.info);
    // }
    // useEffect(() => {
    //     fetchMenu();
    // },[])

    const resData = useRestaurantMenu(resId);

    console.log(resData);
    // return <Shimmer />

    const {name, cuisines, costForTwoMessaages} = resData[0].card?.card.info
    
    const categories = resData[2].groupedCard.cardGroupMap.REGULAR?.cards.filter(
        (c) => 
        c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    console.log(categories)
    // const {name}

  return (
    name.length === 0 ? <Shimmer /> :
    <div className="text-center">
        <h1 className='font-bold my-6 text-2xl'>{name}</h1>
        <p className='font-bold text-lg'>{cuisines.join(",")}</p>
        {/* categories accordian  */}
        {categories.map((res, index) => ( 
            // controlled components
            <ResCategory 
                data ={res?.card?.card} 
                key={res?.card?.card.title} 
                showItem = {index === showIndex ? true : false}
                setShowIndex = {() => setShowIndex(index)}
            />
        ))}
    </div>
  )
}

export default RestMenu
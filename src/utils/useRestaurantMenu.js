import React, { useState, useEffect } from 'react'

const useRestaurantMenu = (resId) => {
    
    const [resData, setResData] = useState([]);

    const fetchMenu = async () => {
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5904779&lng=73.7271909&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`);
        const json = await data.json();
        console.log(json)
        setResData(json?.data?.cards);
        // console.log(json.data.cards[0].card.card.info);
    }

    useEffect(() => {
        fetchMenu();
    },[])

  return resData;
}

export default useRestaurantMenu;

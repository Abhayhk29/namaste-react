// import { useEffect, useState } from 'react'
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';

const RestMenu = () => {

    // const [resData, setResData] = useState([]);
    const {resId} = useParams();
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

  return (
    resData.length === 0 ? <Shimmer /> :
    <div className="menu">
        <h1>{resData.name}</h1>
        <h2>{resData.cuisines.join(",")}</h2>
        <h2>{resData.costForTwoMessaages}</h2>
        <h2>Menu</h2>
        <ul>
            <li>Biryani</li>
            <li>Burgers</li>
            <li>Diet Coke</li>
        </ul>
    </div>
  )
}

export default RestMenu
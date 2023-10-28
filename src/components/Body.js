import RestaurantCard from "./RestaurantCard";
import data from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    const [listOfRest, setListOfRest] = useState([])
    const [searchText, setSearchText] = useState('')
    // state variable

    useEffect(() => {
        console.log("use Effect call");
        fetchData();
    },[])

    const fetchData = async () => {
        const data  = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5904779&lng=73.7271909&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const result = await data.json();
        setListOfRest(result?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        console.log(result.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
    }

    // conditional rendering
    return listOfRest.length === 0 ? <Shimmer /> : (
        <div className='body'>
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} />
                    <button>Search</button>
                </div>
                <button className="filter-btn" onClick={() => {
                    const filteredList = listOfRest.filter((res) => res.avgRating > 4)
                    setListOfRest(filteredList);
                }}>Top Rated Restarurant</button>
            </div>
            {/* <div className='search'>Search</div> */}
            <div className='res-container'>
                {listOfRest.map((item,index) => (
                    // <div>index</div>
                    <RestaurantCard key={item.info.id} data={item.info} />
                ))}
            </div>
        </div>
    )
}

export default Body;
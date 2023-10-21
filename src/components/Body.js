import RestaurantCard from "./RestaurantCard";
import data from "../utils/mockData";
import { useState, useEffect } from "react";

const Body = () => {
    const [listOfRest, setListOfRest] = useState(data)
    // state variable

    return(
        <div className='body'>
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    const filteredList = listOfRest.filter((res) => res.avgRating > 4)
                    setListOfRest(filteredList);
                }}>Top Rated Restarurant</button>
            </div>
            <div className='search'>Search</div>
            <div className='res-container'>
                {listOfRest.map((item,index) => (
                    <RestaurantCard key={item.id} data={item} />
                ))}
            </div>
        </div>
    )
}

export default Body;
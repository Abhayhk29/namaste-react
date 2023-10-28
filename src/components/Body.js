import RestaurantCard from "./RestaurantCard";
import data from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
    const [listOfRest, setListOfRest] = useState([])
    const [listOfFiltRest, setListOfFiltRest] = useState([])
    const [searchText, setSearchText] = useState('')
    // state variable

    // whwenever the state variable updates , react riggers a rencoilations cycle (rerender the component)

    useEffect(() => {
        console.log("use Effect call");
        fetchData();
    },[])

    const fetchData = async () => {
        const data  = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5904779&lng=73.7271909&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const result = await data.json();
        setListOfRest(result?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setListOfFiltRest(result?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        // console.log(result.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
    }

    // conditional rendering
    return listOfRest.length === 0 ? <Shimmer /> : (
        <div className='body'>
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                    <button onClick={() => {
                        // update the rest card and update the UI
                        // note search text
                        const newList = listOfRest.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        console.log(newList)
                        console.log(searchText)
                        setListOfFiltRest(newList)

                    }}>Search</button>
                </div>
                <button className="filter-btn" onClick={() => {
                    const filteredList = listOfRest.filter((res) => res.avgRating > 4)
                    setListOfRest(filteredList);
                }}>Top Rated Restarurant</button>
            </div>
            {/* <div className='search'>Search</div> */}
            <div className='res-container'>
                {listOfFiltRest.map((item,index) => (
                    // <div>index</div>
                    <Link to={"/restaurant/" + item.info.id} key={item.info.id}>
                        <RestaurantCard data={item.info} />
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Body;
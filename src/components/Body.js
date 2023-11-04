import RestaurantCard, { withPromLavel } from "./RestaurantCard";
import data from "../utils/mockData";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";


const Body = () => {
    const [listOfRest, setListOfRest] = useState([])
    const [listOfFiltRest, setListOfFiltRest] = useState([])
    const [searchText, setSearchText] = useState('')
    // state variable
    const { loggedInUser ,setUserInfo} = useContext(UserContext); 
    
    const RestarurantCardPromoted = withPromLavel(RestaurantCard);

    // whwenever the state variable updates , react riggers a rencoilations cycle (rerender the component)

    useEffect(() => {
        console.log("use Effect callabhay");
        fetchData();
    },[])

    const fetchData = async () => {
        const data  = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5904779&lng=73.7271909&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const result = await data.json();
        setListOfRest(result?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setListOfFiltRest(result?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        console.log(result?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const onLineStatus = useOnlineStatus();

    if(!onLineStatus) return <h2>Seems THat you are offline please check your internet</h2>

    // conditional rendering
    return listOfRest.length === 0 ? <Shimmer /> : (
        <div className='body'>
            <div className="flex">
                <div className="search m-4 p-4">
                    <input type="text" className="border border-solid border-black" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                    <button className="px-4 py-2 bg-gray-100 m-4 rounded-lg" onClick={() => {
                        // update the rest card and update the UI
                        // note search text
                        const newList = listOfRest.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        console.log(newList)
                        console.log(searchText)
                        setListOfFiltRest(newList)

                    }}>Search</button>
                </div>
                <div className="search m-4 p-4 flex items-center">
                    <button className="px-2 py-2 bg-gray-100 m-1 rounded-lg" onClick={() => {
                        const filteredList = listOfRest.filter((res) => res.avgRating > 4)
                        setListOfRest(filteredList);
                    }}>Top Rated Restarurant</button>
                </div>
                <div className="search m-4 p-4 flex items-center">
                    <label>UserName : </label>
                    <input className="border border-black p-2" value={loggedInUser} onChange={(e) => setUserInfo(e.target.value)}/>
                </div>
            </div>
            {/* <div className='search'>Search</div> */}
            <div className='flex flex-wrap'>
                {listOfFiltRest.map((item,index) => (
                    // <div>index</div>
                    <Link to={"/restaurant/" + item.info.id} key={item.info.id}>
                        {/* if the rest is promoted we will take another id for that */}
                        
                        { item.info.locality === "Balewadi High Street" ? <RestaurantCard data={item.info} /> : <RestarurantCardPromoted data={item.info} /> }
                        
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Body;
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const  RestaurantCard = (props) => {

    const {loggedInUser} = useContext(UserContext);
    // console.log(props);
    const {data} = props;
    return (
        <div data-testid="resCard" className='m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200'>
            <img
            alt="image"
            className='res-logo rounded-lg'
            src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/' + data.cloudinaryImageId}
            />
            <h3 className="font-bold py-4 text-lg">{data.name}</h3>
            <h3>{data.address}</h3>
            <h4>{data.cuisines.join(', ')}</h4>
            <h4>{data.areaName}</h4>
            <h4>{data.avgRating}</h4>
            <h4>{data.costForTwo}</h4>
            <h4>{loggedInUser}</h4>
        </div>
    )
}

// higher order component 

// input - rest card => prpmoted ResPromoted

export const withPromLavel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-black text-white m-4 p-2 rounded-lg">Promoted</label>
                <RestaurantCard {...props} />
            </div>
        )
    }
}

// pure compoted  


export default RestaurantCard;
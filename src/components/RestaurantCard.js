const  RestaurantCard = (props) => {
    // console.log(props);
    const {data} = props;
    return (
        <div className='res-card' style={{backgroundColor:"#f0f0f0"}}>
            <img
            alt="image"
            className='res-logo'
            src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/' + data.cloudinaryImageId}
            />
            <h3>{data.address}</h3>
            <h4>{data.cuisines.join(', ')}</h4>
            <h4>{data.areaName}</h4>
            <h4>{data.avgRating}</h4>
            <h4>{data.costForTwo}</h4>
        </div>
    )
}


export default RestaurantCard;
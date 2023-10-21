const  RestaurantCard = (props) => {
    // console.log(props);
    const {data} = props;
    return (
        <div className='res-card' style={{backgroundColor:"#f0f0f0"}}>
            <img
            alt="image"
            className='res-logo'
            src="https://www.authenticroyal.com/wp-content/uploads/2016/11/vegetable-biryani.jpg"
            />
            <h3>{data.address}</h3>
            <h4>{data.cuisines.join(', ')}</h4>
            <h4>{data.area}</h4>
            <h4>{data.avgRating}</h4>
            <h4>{data.maxDeliveryTime} Minutes</h4>
        </div>
    )
}


export default RestaurantCard;
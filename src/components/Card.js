import starlogo from '../img/star-rating.svg';

export default function Card(props) {
    console.log(props.title);
    // console.log(props.props.title);
    // logic to display whether sold out or still online 
    let openSpotStatus;
    if(props.openspots === 0) {
        openSpotStatus = "SOLD OUT";
    }
    else if(props.openspots > 0) {
        openSpotStatus = "ONLINE";
    }

    console.log(openSpotStatus);

    return (
        <div className="card-container">
            {openSpotStatus && <div className="openspots">{openSpotStatus}</div>}
            <img src={props.coverImg} alt="card-img" className="card-img" />
            <p className="card-ratings">
                <img src={starlogo} alt="star logo" />
                <span className="star">{props.stats.rating.toFixed(1)}  </span>
                <span className="country">&#40;{props.stats.reviewCount}&#41; <span>. </span>{props.location}</span>
            </p>
            <p className="card-disc">{props.title}</p>
            <p className="card-pricing">
                <span className="price">From ${props.price}</span>
                <span>/person</span>
            </p>
        </div>
    );
}
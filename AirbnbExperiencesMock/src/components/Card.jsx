import star from '/src/assets/Star.png'
export default function Card(props){
    return (
        <div className="card">
            <div className="img">
                <div className="status">
                    <p>{props.status}</p>
                </div>
                <img src={props.img}/>
            </div>
            <div className="rating">
                <img src={star} alt="Star" />
                <p>{parseFloat(props.rating).toFixed(1)} <span>({props.reviewCount}) • {props.country}</span></p>
            </div>
            <div className="description">
                <p>{props.description}</p>
            </div>
            <div className="cost">
                <p><span>From ${props.cost}</span> / person</p>
            </div>
        </div>
    )
}
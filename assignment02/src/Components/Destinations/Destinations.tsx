import PropTypes from "prop-types";
import CardContainer from "../CardContainer/CardContainer";
import './Destinations.css';

const Destinations = ({ data, city }: { data: { 
    place: string;
    city: string;
    shortDescription: string;
    fullDescription: string;
    relatedPlaces: string[];
    image: string; 
    }[];    
    city?:string; 
}) => {

    const destinationTitle =(!city)? "Destinations":"Similar Destinations";
    const destinationSubtitle =(!city)? "Just for you. Because you and your bike are special to us!":`Because you liked ${city}`;

    return (
        <>
        <div className="destination-container">
            <h1 className="destination-title">{destinationTitle}</h1>
            <p className="destination-subtitle">{destinationSubtitle}</p>
            <CardContainer posts={data}/>
        </div>
            
        </>
    );


}
Destinations.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            place: PropTypes.string.isRequired,
            city: PropTypes.string.isRequired,
            shortDescription: PropTypes.string.isRequired,
            fullDescription: PropTypes.string.isRequired,
            relatedPlaces: PropTypes.arrayOf(PropTypes.string).isRequired,
            image: PropTypes.string,
        })).isRequired,
}

export default Destinations;
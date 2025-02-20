import PropTypes from "prop-types";
import Card from "../Card/Card";
import './CardContainer.css';

const CardContainer = ({ posts }: { posts: { 
    place: string;
    city: string;
    shortDescription: string;
    fullDescription: string;
    relatedPlaces: string[];
    image: string; 
}[] }) => {

    return (

        <section className="card-container">
            {posts.map((post, index) => (
              <Card key={index} place={post.place} image={post.image} shortDescription={post.shortDescription} city={post.city}/>
            ))}
        </section>

    );
}
CardContainer.propTypes = {
    posts: PropTypes.arrayOf(
        PropTypes.shape({
            place: PropTypes.string.isRequired,
            city: PropTypes.string.isRequired,
            shortDescription: PropTypes.string.isRequired,
            fullDescription: PropTypes.string.isRequired,
            relatedPlaces: PropTypes.arrayOf(PropTypes.string).isRequired,
            image: PropTypes.string,
        })).isRequired,
}



export default CardContainer;
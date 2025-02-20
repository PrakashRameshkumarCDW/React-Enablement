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

export default CardContainer;
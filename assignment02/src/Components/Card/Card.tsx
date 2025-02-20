import { useNavigate } from 'react-router-dom';
import './Card.css';
import Button from '../Button/Button';
const Card = ({ image, place, city, shortDescription }: {
    image: string;
    place: string;
    city: string;
    shortDescription: string;
}) => {
    const navigate = useNavigate();
    return (
        <>
            <article className="card">
                <div className='card-image'>
                    <img src={image} alt={image} />
                </div>

                <div className="card-content">
                    <p className="card-subtle">
                        {place}
                    </p>
                    <p className="town-names">{city}</p>
                    <p className='card-description'>
                        {shortDescription}
                    </p>
                <Button name="READ MORE" className="read-more" type="button" onClick={() => { navigate(`/details/${city}`); }} />
                </div>
            </article>
        </>
    );

}

export default Card;
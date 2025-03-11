import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import './Card.css';

const Card = ({ image, type, description, id }: {
    image: string;
    type: string;
    description: string;
    id:string;
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
                        {type}
                    </p>
                    <p className='card-description'>
                        {description}
                    </p>
                <Button name="SHOP NOW" className="shop-now" type="button" onClick={()=>navigate(`/categories/${id}`)} />
                </div>
            </article>
        </>
    );

}
export default Card;
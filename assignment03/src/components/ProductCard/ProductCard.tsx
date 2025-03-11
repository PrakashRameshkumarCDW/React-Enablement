import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldHeart } from "@fortawesome/free-solid-svg-icons";
import Button from "../Button/Button";
import "./ProductCard.css";



function ProductCard({ name, photo, guarantee, price, description, id, rating,onAddToCart,onAddToWishList,quantity,className,type}: {
    className: string;
    name: string;
    photo: string;
    description: string;
    price: string;
    guarantee: number;
    id: number;
    rating:number;
    quantity:number;
    onAddToCart:(product:{
        id: number;
        name: string;
        photo: string;
        guarantee: number,
        rating: number,
        price: string,
        description: string;
        quantity:number;
    }) => void;
    onAddToWishList: (product:{
        id: number;
        name: string;
        photo: string;
        guarantee: number,
        rating: number,
        price: string,
        description: string;
        quantity:number;
    }) => void;
    type: string;
}) {
    const product = { id, name, photo, guarantee, rating,price, description, quantity };

    return (
        <>
            <div className={className}>
                <div className='product-card-image'>
                    <img src={photo} alt={name} />
                </div>

                <div className="product-card-content">
                    <div className="product-title">
                        <p className="product-card-name">
                            {name}
                        </p>
                        <p className="product-price">
                            ₹ {price}
                        </p>
                    </div>

                    {type && (type === "order") && 
                        <div className="product-quantity">
                            Quantity: {quantity}
                        </div>
                    }

                    <p className='product-card-description'>
                        {description}
                    </p>
                    {type && (type === "product") && 
                    <>
                        <div className="product-guarantee">
                            <FontAwesomeIcon icon={faShieldHeart} className='product-guarantee' style={{ color: "green", height: "20px" }} />
                            <p className="guarantee-text">{guarantee} YEAR GUARANTEE</p>
                        </div>

                        <div className="border"></div>
                        <div className="product-buttons">
                            <span className="add-to-wishlist" onClick={()=>{onAddToWishList(product);}}>ADD TO WISHLIST</span>
                            <Button name="ADD TO CART" className="add-to-cart" type="button" onClick={()=>{onAddToCart(product);}} />
                        </div>
                    </>}   
                </div>
            </div>
        </>
    );
}

export default ProductCard;

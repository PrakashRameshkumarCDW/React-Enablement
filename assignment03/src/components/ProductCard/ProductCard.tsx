import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldHeart } from "@fortawesome/free-solid-svg-icons";
import Button from "../Button/Button";
import "./ProductCard.css";
import { PRODUCT_CARD_TEXT } from "../../constants/APP_CONSTANTS";

interface Product {
    id: number;
    name: string;
    photo: string;
    description: string;
    price: string;
    guarantee: number;
    rating: number;
    quantity: number;
}

interface ProductCardProps extends Product {
    className: string;
    type: "product" | "order";
    onAddToCart: (product: Product) => void;
    onAddToWishList: (product: Product) => void;
}

function ProductCard({ name, photo, guarantee, price, description, id, rating,onAddToCart,onAddToWishList,quantity,className,type}: ProductCardProps) {
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
                            {PRODUCT_CARD_TEXT.QUANTITY}: {quantity}
                        </div>
                    }

                    <p className='product-card-description'>
                        {description}
                    </p>
                    {type && (type === "product") && 
                    <>
                        <div className="product-guarantee">
                            <FontAwesomeIcon icon={faShieldHeart} className='product-guarantee' style={{ color: "green", height: "20px" }} />
                            <p className="guarantee-text">{guarantee} {PRODUCT_CARD_TEXT.GUARANTEE}</p>
                        </div>

                        <div className="border"></div>
                        <div className="product-buttons">
                            <span className="add-to-wishlist" onClick={()=>{onAddToWishList(product);}}>{PRODUCT_CARD_TEXT.ADD_TO_WISHLIST}</span>
                            <Button name={PRODUCT_CARD_TEXT.ADD_TO_CART} className="add-to-cart" type="button" onClick={()=>{onAddToCart(product);}} />
                        </div>
                    </>}   
                </div>
            </div>
        </>
    );
}

export default ProductCard;

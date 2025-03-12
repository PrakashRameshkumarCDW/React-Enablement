import ProductCard from "../../components/ProductCard/ProductCard";
import { ORDER_CONFIRMATION_TEXT } from "../../constants/APP_CONSTANTS";
import "./OrderConfirmation.css";

interface confirmedProductsProp {
    confirmedProducts: {
        id: number;
        name: string;
        photo: string;
        guarantee: number;
        rating: number;
        price: string;
        description: string;
        quantity:number;
    }[];
}

const OrderConfirmation = ({confirmedProducts}:confirmedProductsProp
) =>{

    return(
        <>
            <div className="order-confirmation-container">
                <div className="order-confirmation-title">{ORDER_CONFIRMATION_TEXT.TITLE}</div>
                <div className="order-confirmation-subtle">{ORDER_CONFIRMATION_TEXT.SUBTITLE}</div>
                <div className="order-confirmed-products">
                {confirmedProducts.map((order, index) => (
                    <ProductCard 
                        className="product-card order-card"
                        key={index}
                        name={order.name}
                        photo={order.photo}
                        description={order.description}
                        price={order.price}
                        guarantee={order.guarantee}
                        id={order.id}
                        rating={order.rating}
                        onAddToCart={()=>{}}
                        onAddToWishList={()=>{}} 
                        quantity={order.quantity}
                        type="order"/>
                ))}
                
                </div>
            </div>
        </>
    );



}

export default OrderConfirmation;
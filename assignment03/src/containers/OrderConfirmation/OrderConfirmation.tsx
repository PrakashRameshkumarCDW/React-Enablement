import ProductCard from "../../components/ProductCard/ProductCard";
import "./OrderConfirmation.css";
const OrderConfirmation = ({confirmedProducts}:{
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
}) =>{

    return(
        <>
            <div className="order-confirmation-container">
                <div className="order-confirmation-title">Order Confirmation</div>
                <div className="order-confirmation-subtle">Thank you for shopping with us. The items will be delivered within 7days</div>
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
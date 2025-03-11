import Button from "../Button/Button";
import "./Item.css";

const Item = ({ product,selectedTab,onUpdateCart, onUpdateWishlist }: { 
    product: {
        id: number;
        name: string;
        photo: string;
        price: string;
        quantity:number;
    };
    selectedTab:string;
    onUpdateCart: (id: number, quantity: number) => void;
    onUpdateWishlist: (id:number)=>void;
}) => {

    const handleIncrease = () => {
        onUpdateCart(product.id, product.quantity + 1);
    };

    const handleDecrease = () => {
        const newQuantity = product.quantity - 1;
        onUpdateCart(product.id, newQuantity);
    };

    const handleAddToCartFromWishlist = () =>{
        onUpdateWishlist(product.id);
    }

    return (
        <>
        <div key={product.id} className="cart-card">
            <div className="cart-image">
                <img src={product.photo} alt={product.name} />
            </div>
            <div className="cart-info">
                <h3 className="cart-title">{product.name}</h3>
                <p className="cart-price">₹ {product.price}</p>
            </div>
        
        
            {selectedTab === "cart" ? (
                <>
                    <div className="counter">
                        <div className="decrease" onClick={handleDecrease}>-</div>
                        <div className="value">{product.quantity}</div>
                        <div className="increase" onClick={handleIncrease}>+</div>
                    </div>
                </>
            ):(
                <>
                    <Button name={"ADD TO CART"} className={"cart-container-btn"} onClick={handleAddToCartFromWishlist}/>                
                </>
            )}
        </div>
        </>
    );
};

export default Item;


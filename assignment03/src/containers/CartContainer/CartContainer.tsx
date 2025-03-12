import { useState } from "react";
import Item from "../../components/Item/Item";
import Button from "../../components/Button/Button";
import "./CartContainer.css";
import { useNavigate } from "react-router-dom";
import { updateCart } from "../../services/maintainCart";
import { updateWishlist } from "../../services/maintainWishlist";
import { CART_CONSTANTS } from "../../constants/APP_CONSTANTS";

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

interface CartContainerProps {
    cartProducts: Product[];
    wishlistProducts: Product[];
    setCartProducts?: (products: Product[]) => void;
    setWishlists?: (products: Product[]) => void;
    selectedOption: string;
}


const CartContainer = ({ cartProducts, wishlistProducts,setCartProducts,setWishlists,selectedOption }: CartContainerProps) => {
    const navigate = useNavigate();
    const [selectedTab, setSelectedTab] = useState<string>(selectedOption);

    const handleTabChange = (tab: "cart" | "wishlist") => {
        setSelectedTab(tab);
    };

    const handleUpdateCart = (id: number, quantity: number) => {
        const newUpdatedCart = cartProducts.map((item) => {
            if (item.id === id) {
                item.quantity = quantity; 
            }
            return item;
        }).filter((item) => item.quantity > 0); 
        setCartProducts?.([...newUpdatedCart]);
        updateCart([...newUpdatedCart]);
    };

    const handleUpdateWishlist = (id:number) =>{

        const newUpdatedWishlist = wishlistProducts.filter((item) => item.id !== id);
        setWishlists?.([...newUpdatedWishlist]);
        updateWishlist([...newUpdatedWishlist]);
        
        const removedFromWishlist = wishlistProducts.filter((item) => item.id === id);
        const isAlreadyInCart = cartProducts.some((item) => item.id === removedFromWishlist[0].id);
        if(!isAlreadyInCart){
            const newUpdatedArrBasedOnWishlist = [...cartProducts,removedFromWishlist[0]];
            setCartProducts?.(newUpdatedArrBasedOnWishlist);
            updateCart([...newUpdatedArrBasedOnWishlist]);
        }
    }
    const totalAmount = cartProducts.reduce((sum, item) => sum + parseInt(item.price) * item.quantity, 0);



    return (
        <div className="cart-container">
        <div className="cart-content">
            <div className="buttons-container">
                <div 
                    className={`my-cart ${selectedTab === "cart" ? "active" : ""}`} 
                    onClick={() => handleTabChange("cart")}
                >
                    {CART_CONSTANTS.MY_CART}
                </div>
                <div 
                    className={`my-wishlist ${selectedTab === "wishlist" ? "active" : ""}`} 
                    onClick={() => handleTabChange("wishlist")}
                >
                   {CART_CONSTANTS.MY_WISHLIST}
                </div>
            </div>

            
            {selectedTab === "cart" ? (
                <>
                <div className="cart-products-section">
                    {cartProducts.length > 0 ? (
                        cartProducts.map((product) => <Item key={product.id} product={product} selectedTab={selectedTab}  onUpdateCart={handleUpdateCart} onUpdateWishlist={()=>{}}/>)
                    ) : (
                        <p className="empty-message">{CART_CONSTANTS.EMPTY_CART}</p>
                    )}
                </div>
                </>
            ) : (
                <div className="wishlist-products-section">
                    {wishlistProducts.length > 0 ? (
                        wishlistProducts.map((product) => <Item key={product.id} product={product} selectedTab={selectedTab} onUpdateCart={()=>{}} onUpdateWishlist={handleUpdateWishlist} />)
                    ) : (
                        <p className="empty-message">{CART_CONSTANTS.EMPTY_WISHLIST}</p>
                    )}
                </div>
            )}
            </div>
            {selectedTab && (selectedTab === "cart") &&
            <div className="cart-footer">
                <div className="total-price-section">
                    <div className="total-amount-Header">
                        <p className="total-amount-heading">{CART_CONSTANTS.TOTAL_AMOUNT}</p>
                        <p className="total-amount-value">₹ {totalAmount}</p>
                    </div>
                    <Button name={CART_CONSTANTS.PLACE_ORDER} className={"add-to-cart"} onClick={()=>navigate("/confirmOrder", { state: { cartProducts } })} />
                </div>
            </div>
            }

        </div>
    );
};

export default CartContainer;

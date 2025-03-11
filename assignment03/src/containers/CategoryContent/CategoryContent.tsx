import { useState, useEffect } from "react";
import { fetchUrl } from "../../services/apiService";
import loader from "../../assets/loader.gif";
import './CategoryContent.css';
import ProductCard from "../../components/ProductCard/ProductCard";
import CartContainer from "../CartContainer/CartContainer";
import { addToCart, getCart } from "../../services/maintainCart";
import { addToWishlist, getWishlist } from "../../services/maintainWishlist";

const CategoryContent = ({ id, 
 }: {
    id?: string;
}) => {
    const [Categories, setCategories] = useState<
        {
            id: number;
            name: string;
            photo: string;
            guarantee: number,
            rating: number,
            price: string,
            description: string;
            quantity:number;
        }[]>([]);
    const [loading, setLoading] = useState(true);

    const [cartProducts, setCartProducts] = useState(getCart()); 
    const [wishlists, setWishlists] = useState(getWishlist()); 

    const [selectedOption,setSelectedOption] = useState("");

    const handleAddToCart = (product:{
        id: number;
        name: string;
        photo: string;
        guarantee: number,
        rating: number,
        price: string,
        description: string;
        quantity:number;
    }) => {
        const updatedProduct = {...product,quantity: 1};
        addToCart(updatedProduct);
        setCartProducts([...getCart()]);
    };
    const handleAddToWishList = (product:{
        id: number;
        name: string;
        photo: string;
        guarantee: number,
        rating: number,
        price: string,
        description: string;
        quantity:number;
    }) => {
        addToWishlist(product);
        setWishlists([...getWishlist()]);
    };

    
    useEffect(() => {
        const getCategories = async () => {
            setLoading(true);
            const data = await fetchUrl(
                `https://jsonmockserver.vercel.app/api/shopping/furniture/products?category=${id}`
            );
            const updatedData = data.map((item: any) => ({
                ...item,
                quantity: 1,
            }));
            setCategories(updatedData);
            setLoading(false);
        };
        getCategories();
    }, [id]);

    const [showCart, setShowCart] = useState(false);

    useEffect(()=>{
        if(cartProducts && cartProducts.length > 0){
            setSelectedOption("cart");
            setShowCart(true);
        }
        else if(wishlists && wishlists.length > 0){
            setSelectedOption("wishlist");
            setShowCart(true);
        }
    });

    return (

        <>
            <div className={showCart?"category-content-other":"category-content"}>
                {loading ? (
                    <div className="loader-container">
                        <img src={loader} alt="Loading..." className="loader" />
                    </div>
                ) : (
                    <>
                    <div className={showCart?"product-card-container-other":"product-card-container"}>
                        {Categories && Categories.length != 0 && Categories.map((category, index) => (
                            <ProductCard 
                                className={showCart ? "product-card-other" : "product-card"}
                                key={index}
                                name={category.name}
                                photo={category.photo}
                                description={category.description}
                                price={category.price}
                                guarantee={category.guarantee}
                                id={category.id}
                                rating={category.rating}
                                onAddToCart={handleAddToCart}
                                onAddToWishList={handleAddToWishList} 
                                quantity={category.quantity}
                                type="product"/>
                        ))}
                    </div>
                    {showCart && <CartContainer 
                                    cartProducts={cartProducts} 
                                    wishlistProducts={wishlists}
                                    setCartProducts = {setCartProducts}
                                    setWishlists={setWishlists}
                                    selectedOption={selectedOption}
                                    />}
                    </>
                )}
            </div>
        </>
    );

}

export default CategoryContent;
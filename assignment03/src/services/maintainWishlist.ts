let wishlistProducts: {
    id: number;
    name: string;
    photo: string;
    guarantee: number;
    rating: number;
    price: string;
    description: string;
    quantity:number;
}[] = [];
export const addToWishlist = (product: {
    id: number;
    name: string;
    photo: string;
    guarantee: number;
    rating: number;
    price: string;
    description: string;
    quantity:number;
}) => {
    if (!wishlistProducts.some((p) => p.id === product.id)) {
        wishlistProducts.push(product);
    }
};

export const getWishlist = () => {
    return wishlistProducts;
};

export const updateWishlist = (newUpdatedArr: {
    id: number;
    name: string;
    photo: string;
    guarantee: number;
    rating: number;
    price: string;
    description: string;
    quantity:number;
}[]) => {
    return wishlistProducts = [...newUpdatedArr];
}

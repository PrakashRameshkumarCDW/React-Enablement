let cartProducts: {
    id: number;
    name: string;
    photo: string;
    guarantee: number;
    rating: number;
    price: string;
    description: string;
    quantity:number;
}[] = [];
export const addToCart = (product: {
    id: number;
    name: string;
    photo: string;
    guarantee: number;
    rating: number;
    price: string;
    description: string;
    quantity:number;
}) => {
    if (!cartProducts.some((p) => p.id === product.id)) {
        cartProducts.push(product);
    }
};

export const getCart = () => {
    return cartProducts;
};

export const updateCart = (newUpdatedArr: {
    id: number;
    name: string;
    photo: string;
    guarantee: number;
    rating: number;
    price: string;
    description: string;
    quantity:number;
}[]) => {
    return cartProducts = [...newUpdatedArr];
}
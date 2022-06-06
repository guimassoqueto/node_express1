type ProductType = {
    id: string;
    title: string;
    price: number;
    description: string;
    image: string;
}

let products: ProductType[] = [];

export { products, ProductType };
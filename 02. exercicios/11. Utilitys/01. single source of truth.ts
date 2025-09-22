interface Product{
    id: number;
    name: string;
    price: number;
    description?: string;
}

const ProductPreview: Pick<Product, "id" | "name"> = {
    id: 1,
    name: "Water",
}

const ProductForSale: Omit<Product, "description"> = {
    id: 2,
    name: "Bean",
    price: 9.99,
}
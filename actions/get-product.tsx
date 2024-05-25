import { Product } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URl}/products`;

const getProduct = async (id: string): Promise<Product> => {
    const response = await fetch(`${URL}/${id}`);

    return response.json();
};

export default getProduct;
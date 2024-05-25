import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URl}/categories`;

const getCategories = async (): Promise<Category []> => {
    const response = await fetch(URL);

    return response.json();
};

export default getCategories;
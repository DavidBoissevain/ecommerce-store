import { Color } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/colors`;

const getColor = async (): Promise<Color []> => {
    const response = await fetch(URL);

    return response.json();
};

export default getColor;
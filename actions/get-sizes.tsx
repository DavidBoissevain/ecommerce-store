import { Size } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URl}/sizes`;

const getSizes = async (): Promise<Size []> => {
    const response = await fetch(URL);

    return response.json();
};

export default getSizes;
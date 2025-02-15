import type { Category } from "@/types/categories.types";

export async function getCategories(){
    const response = await fetch("https://gist.githubusercontent.com/rafaelnonato79/699729c5199f706ec0d69c87ec799f07/raw/d18984d46fc9e1c7c713933af181fdfc459f308a/gistfile1.txt");

    if(!response.ok){
        throw new Error("Failed to fetch categories");
    }

    const categories: Category[] = await response.json();

    return categories;
}
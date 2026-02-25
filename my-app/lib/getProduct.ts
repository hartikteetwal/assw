import { cache } from "react"
import { Product } from "./product"
import { products } from "./products";

// export const revalidate = 10;


export const getProduct = async (id: string) => {
    // const res = await fetch(`http://localhost:3000/api/products/${id}`, {
    //     cache: 'no-store' // Ye is function ko dynamic bana dega
    // });
    // console.log("Fetching Data...")
    return products.find(p => p.id === id)
}

export const getProductById = async (id: string): Promise<Product | undefined> => {
    await new Promise(resolve => setTimeout(resolve, 3000));
    const res = await fetch(`http://localhost:3000/api/products/${id}`, {
        cache:"no-store"
    })
    const result = await res.json()
    console.log("Fetching Data...")
    return result
}

export const getProductData = async ():Promise<Product[]> => {
    // const res = await fetch("http://localhost:3000/api/products", {
    //     next: { revalidate: 20 }
    // })
    // if (!res.ok) throw new Error("Failed to fetch")
    // return res.json()
    return products
}
import { cache } from "react"
import { Product } from "./product"

export const revalidate = 10;

export const getProduct = cache(async (id: string): Promise<Product | undefined> => {
    const res = await fetch(`http://localhost:3000/api/products/${id}`, {
        // cache:"no-store",
        next:{revalidate:10}
    })
    const result = await res.json()
    console.log("Fetching Data...")
    return result
})

export const getProductData = async ():Promise<Product[]> => {
    const res = await fetch("http://localhost:3000/api/products", {
        next: { revalidate: 20 }
    })
    if (!res.ok) throw new Error("Failed to fetch")
    return res.json()
}
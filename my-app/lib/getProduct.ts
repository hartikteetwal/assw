import { cache } from "react"
import { Product } from "./product"
import { products } from "./products"

export const getProduct = async (id: string): Promise<Product | undefined> => {
    const res = await fetch(`http://localhost:3000/api/products/${id}`, {
        cache:"no-store"
    })
    const result = await res.json()
    console.log(result,"result")
    return result
}

export const getProductData = cache(async ():Promise<Product[]> => {
    const res = await fetch("http://localhost:3000/api/products", {
        next: { revalidate: 20 }
    })
    if (!res.ok) throw new Error("Failed to fetch")
    return res.json()
})
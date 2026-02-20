import { cache } from "react"
import { Product } from "./product"
import { products } from "./products"

export const getProduct = cache(async (id: string): Promise<Product | undefined> => {
    const res = await fetch(`http://localhost:3000/api/products/${id}`, {
        next:{revalidate:60}
    })
    const result = await res.json()
    console.log(result,"result")
    console.log("fetching products...")
    return result
})
import { Product } from "@/lib/product"
import { notFound } from "next/navigation"

export const dynamic = "force-dynamic"


export const getProduct = async (id:string): Promise<Product|undefined> => {
    const res = await fetch(`http://localhost:3000/api/products/${id}`)
    return res.json()
}

interface PageProps{
    params: {
        id:string
    }
}

const ProductPage = async({params}:PageProps) => {
    const product = await getProduct(params.id)
    if (!product) return notFound()
    return (
        <div>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <h2>₹ {product.price}</h2>
        </div>
    )
}

export default ProductPage

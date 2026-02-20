import { getProduct } from "@/lib/getProduct"
import { Product } from "@/lib/product"

// const getProduct = async (id: string):Promise<Product|undefined> => {
//     const res = await fetch(`http://localhost:3000/api/products/${id}`)
//     return res.json()
// }

interface PricePros{ id: string }

const ProductPrice = async ({ id }: PricePros ) => {
    const product = await getProduct(id)

    if (!product) {
        return <h2>Product not found</h2>
    }
    return (
        <h2>₹ {product.price}</h2>
    )
}

export default ProductPrice
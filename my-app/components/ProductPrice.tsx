import { getProduct } from "@/lib/getProduct"
export const revalidate = 10;

// import { Product } from "@/lib/product"

// const getProduct = async (id: string):Promise<Product|undefined> => {
//     const res = await fetch(`http://localhost:3000/api/products/${id}`)
//     return res.json()
// }


const ProductPrice = async ({ id }:{ id: string }) => {
    
    const product = await getProduct(id)

    if (!product) {
        return <h2>Product not found</h2>
    }
    return (
        <h2>₹ {product.price}{" "}{new Date().toLocaleTimeString()}</h2>
    )
}

export default ProductPrice
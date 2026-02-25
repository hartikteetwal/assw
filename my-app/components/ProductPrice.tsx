import { getProduct, getProductById } from "@/lib/getProduct"
// import { useEffect } from "react";

const ProductPrice = async ({ id }:{ id: string }) => {
    // Dynamic banane ke liye force-dynamic ya no-store use karein
    const product= await getProductById(id)

    if (!product) return <h2>Product not found</h2>;

    return (
        <h2 className="text-2xl font-bold text-green-600">
            ₹ {product.price} 
            <span className="text-xs ml-2 text-red-500">
                {/* (Dynamic: {new Date().toLocaleTimeString()}) */}
            </span>
        </h2>
    )
}
export default ProductPrice;
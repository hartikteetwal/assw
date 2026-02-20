import { AddToCartButton } from "@/components/AddToCartButton"
import ProductPrice from "@/components/ProductPrice"
import { getProduct } from "@/lib/getProduct"
import { Product } from "@/lib/product"
import { notFound } from "next/navigation"
import { Suspense } from "react"


interface PageProps{
    params: Promise<{
        id:string
    }>
}

const ProductPage = async ({ params }: PageProps) => {
    const {id} = await params;
    const product = await getProduct(id)
    if (!product) return notFound()
    return (
        <div>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            {/* <h2>₹ {product.price}</h2> */}

            <Suspense fallback={<p>Loading price...</p>}>
                <ProductPrice id={id} />
            </Suspense>
            <AddToCartButton product={product}/>
        </div>
    )
}

export default ProductPage

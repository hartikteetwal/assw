import { Product } from "@/types/product"
import { products } from "@/lib/products"
import { Suspense } from "react"
import ProductPrice from "@/components/ProductPrice"
import { notFound } from "next/navigation"

// ✅ ADD THIS HERE
export async function generateStaticParams() {
    return products.map((product) => ({
        id: product.id
    }))
}

async function getProduct(id: string): Promise<Product | undefined> {
    const res = await fetch("http://localhost:3000/api/products")
    const allProducts: Product[] = await res.json()

    return allProducts.find((p) => p.id === id)
}

interface PageProps {
    params: {
        id: string
    }
}

export default async function ProductPage({ params }: PageProps) {
    const product = await getProduct(params.id)

    if (!product) return notFound()

    return (
        <div>
            <h1>{product.title}</h1>
            <p>{product.description}</p>

            <Suspense fallback={<p>Loading price...</p>}>
                <ProductPrice id={params.id} />
            </Suspense>
        </div>
    )
}
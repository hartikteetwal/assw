import { AddToCartButton } from "@/components/AddToCartButton"
import ProductPrice from "@/components/ProductPrice"
import { getProduct } from "@/lib/getProduct"
import { notFound } from "next/navigation"
import { Suspense } from "react"
import Image from "next/image"


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
  <div className="min-h-screen bg-gray-50 py-10 px-4">
    <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-3xl p-8 grid grid-cols-1 md:grid-cols-2 gap-10">
      
      <div className="relative w-full h-[400px] bg-gray-100 rounded-2xl overflow-hidden">
        <Image src={product.image} alt={product.title} fill className="object-cover"/>
      </div>

      <div className="flex flex-col justify-between">
        
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            {product.title}
          </h1>

          <p className="mt-4 text-gray-600 leading-relaxed">
            {product.description}
          </p>

          <div className="mt-4">
            <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm capitalize">
              {product.category}
            </span>
          </div>

          <div className="mt-6">
            <Suspense fallback={<p className="text-gray-400">Loading price...</p>}>
              <ProductPrice id={id} />
            </Suspense>
          </div>
        </div>

        <div className="mt-8 flex gap-4">
          <div className="flex-2 w-50">

          <AddToCartButton product={product} />
          </div>

          <button className="flex-2 bg-gray-200 mt-4 hover:bg-gray-300 text-gray-800 rounded-xl transition">
            Buy Now
          </button>
        </div>

      </div>
    </div>
  </div>
)
}

export default ProductPage

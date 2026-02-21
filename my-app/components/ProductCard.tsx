'use client'
import { Product } from "@/lib/product"
import Image from "next/image"
import Link from "next/link"
import { AddToCartButton } from "./AddToCartButton"

export default function ProductCard({ product }:{product:Product}) {
console.log("Product",product)
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
      
      {/* Image Section */}
      <Link href={`/products/${product.id}`} className="relative w-full h-52 block">
      <div className="relative w-full h-52 bg-gray-100">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover group-hover:scale-105 transition duration-300"
        />
      </div>
      </Link>

      {/* Content Section */}
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 line-clamp-1">
          {product.title}
        </h2>

        <p className="text-sm text-gray-500 mt-1 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between mt-4">
          <span className="text-xl font-bold text-blue-600">
            ₹{product.price.toLocaleString()}
          </span>

          <span className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full capitalize">
            {product.category}
          </span>
        </div>
        <AddToCartButton product={product}/>
      </div>
  
    </div>
  )
}
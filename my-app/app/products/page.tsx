import ProductCard from "../../components/ProductCard"
import { products } from "@/lib/products"

// export const revalidate = 20 

export default async function ProductsPage() {

  const res = await fetch("http://localhost:3000/api/time", {
    next: { revalidate: 10 }
  })

  const time = await res.text()

  return (
    <div className="min-h-screen max-w-6xl mx-auto mt-4 px-4">

      <h1 className="text-3xl font-bold mb-6">
        All Products
      </h1>

      <p>{time}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

    </div>
  )
}
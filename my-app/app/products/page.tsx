"use client"
import { Product } from '@/lib/product'
import ProductCard from '../../components/ProductCard'
import { getProductData } from '@/lib/getProduct'
import { useEffect, useState } from 'react';
import { products } from '@/lib/products';

const getProducts = () => {

   const [time, setTime] = useState("")

  useEffect(() => {
    const result = fetch("/api/time",{
      next: { revalidate: 20 },
    }).then(res => res.text())
    result.then(time => setTime(time))
  }, [time])
    // const products = getProductData()
  return (
      <div className="min-h-screen max-w-6xl mx-auto  mt-4 px-4">
      
      <h1 className="text-3xl font-bold mb-6">
        All Products
      </h1>
      <p>{time}</p>

      <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

    </div>

  )
}

export default getProducts


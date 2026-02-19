"use client"
import { Product } from '@/lib/product'
import React, { useEffect, useState } from 'react'

export const revalidate = 60
const ProductList = () => {
    const [products, setProducts] = useState<Product[]>([])
    
    const getProducts = async() => {
        const res = await fetch("/api/products", {
            next:{revalidate:60}
        })
        const result = await res.json()

        setProducts(result)
        
    }

    useEffect(() => {
       getProducts() 
    },[])

  return (
    <div>
          <h1>Products</h1>

          {products.map((product) => (
              <div key={product.id}>
                  <h2>{product.title}</h2>
                  <h2>{product.price}</h2>
              </div>
          ))}
    </div>
  )
}

export default ProductList

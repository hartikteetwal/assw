import { Product } from '@/lib/product'
import { products } from '@/lib/products'

export const revalidate = 60

const getProductData = async ():Promise<Product[]> => {
    const res = await fetch("http://localhost:3000/api/products", {
        next:{revalidate:60}
    })

    return res.json()

}

const getProducts = async () => {
    // const products = await getProductData()
  return (
    <div>
          <h1>Products</h1>
          
          {
              products.map((product) => (
                  <div key={product.id}>
                      <h2>{product.title}</h2>
                      <h2>{product.price}</h2>
                  </div>
              ))
          }
    </div>
  )
}

export default getProducts

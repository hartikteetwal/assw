import { Product } from '@/lib/product'
import ProductCard from '../../components/ProductCard'
import { getProductData } from '@/lib/getProduct'
// import { products } from '@/lib/products'

export const revalidate = 20

// const getProductData = async (): Promise<Product[]> => {
    
//     const res = await fetch("http://localhost:3000/api/products", {
//       next: { revalidate: 20 },
//       // cache:"no-store"
//     })

//     const result =  await res.json()
//     console.log(result,"aaaaa")

//     return result
// }

const getProducts = async () => {
    const products = await getProductData()
  return (
      <div className="min-h-screen max-w-6xl mx-auto  mt-4 px-4">
      
      <h1 className="text-3xl font-bold mb-6">
        All Products
      </h1>
      <p>{new Date().toLocaleTimeString()}</p>

      <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

    </div>

  )
}

export default getProducts


// import { Product } from '@/lib/product';

// export const revalidate = 60;

// const ProductsPage = async () => {
//     const res = await fetch('http://192.168.1.81:3000/api/products', {
//         next: { revalidate: 60 },
//     });

//     const products: Product[] = await res.json();

//     return (
//         <div>
//             <h1>Products</h1>
//             {products.map((product) => (
//                 <div key={product.id}>
//                     <h2>{product.title}</h2>
//                     <p>{product.price}</p>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default ProductsPage;
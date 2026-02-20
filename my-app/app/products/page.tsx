import { Product } from '@/lib/product'
// import { products } from '@/lib/products'

export const revalidate = 60

const getProductData = async (): Promise<Product[]> => {
    
    const res = await fetch("http://192.168.1.81:3000/api/products", {
        next:{revalidate:60}
    })

    const result =  await res.json()
    console.log(result,"aaaaa")

    return result
}

const getProducts = async () => {
    const products = await getProductData()
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

// app/products/page.tsx

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
"use client"
import { Product } from '@/lib/product'
import { useDispatch } from 'react-redux'
import { addToCart } from '../app/store/cartSlice'

export const AddToCartButton = ({product}:{product:Product}) => {
    const dispatch = useDispatch()
    const handleAddCart = ()=>{
        console.log("add to cart",product)
        dispatch(addToCart(product))
    }
  return (
    <button onClick={()=>handleAddCart()} className='bg-black text-white p-2 rounded-md'>Add To Cart</button>
  )
}

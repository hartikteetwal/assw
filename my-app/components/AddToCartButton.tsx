"use client"
import { Product } from '@/lib/product'
import { useDispatch } from 'react-redux'
import { addToCart } from '../app/store/cartSlice'
import { toast } from 'react-toastify'

export const AddToCartButton = ({product}:{product:Product}) => {
    const dispatch = useDispatch()
    const handleAddCart = ()=>{
        console.log("add to cart",product)
      dispatch(addToCart(product))
      toast.success("Add to Cart Successfully")
    }
  return (
    <button onClick={() => handleAddCart()} className='w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl'>Add To Cart</button>
  )
}

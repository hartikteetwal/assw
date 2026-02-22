"use client"

import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store/store'
import Image from 'next/image'
import { removeToCart } from '../store/cartSlice'

const page = () => {
    const cartItems = useSelector((state: RootState) => state.cart.items)
    const dispatch = useDispatch()
    const totalPrice = cartItems.reduce((total, item) => (
        total + item.price
    ),0)

    const handleRemove = (id: string)=>{
        dispatch(removeToCart(id))
    }
    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-3xl font-bold mb-6">🛒 Shopping Cart</h1>

                {cartItems.length === 0 ? (
                    <div className="bg-white p-10 rounded-2xl shadow text-center">
                        <p className="text-gray-500 text-lg">Your cart is empty</p>
                    </div>
                ) : (
                    <div className="grid md:grid-cols-3 gap-6">

                        {/* Cart Items */}
                        <div className="md:col-span-2 space-y-4">
                            {cartItems.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex items-center bg-white p-4 rounded-2xl shadow hover:shadow-lg"
                                >
                                    <div className="w-24 h-24 relative">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-cover rounded-xl"
                                        />
                                    </div>

                                    <div className="ml-6 flex-1">
                                        <h2 className="text-lg font-semibold">
                                            {item.title}
                                        </h2>
                                        <p className="text-gray-500 text-sm">
                                            {item.description}
                                        </p>
                                        <p className="text-blue-600 font-bold mt-2">
                                            ₹ {item.price.toLocaleString()}
                                        </p>
                                    </div>

                                    <button className="text-red-500 hover:text-red-700 font-medium cursor-pointer" onClick={()=>handleRemove(item.id)}>
                                        Remove
                                    </button>
                                </div>
                            ))}
                        </div>

                        {/* Order Summary */}
                        <div className="bg-white p-6 rounded-2xl shadow h-fit">
                            <h2 className="text-xl font-semibold mb-4">
                                Order Summary
                            </h2>

                            <div className="flex justify-between mb-2">
                                <span>Subtotal</span>
                                <span>₹ {totalPrice.toLocaleString()}</span>
                            </div>

                            <div className="flex justify-between mb-4">
                                <span>Shipping</span>
                                <span className="text-green-600">Free</span>
                            </div>

                            <hr className="mb-4" />

                            <div className="flex justify-between font-bold text-lg">
                                <span>Total</span>
                                <span>₹ {totalPrice.toLocaleString()}</span>
                            </div>

                            <button className="w-full mt-6 bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700">
                                Proceed to Checkout
                            </button>
                        </div>

                    </div>
                )}
            </div>
        </div>
    )
}

export default page

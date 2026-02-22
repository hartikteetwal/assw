"use client"
import { RootState } from "@/app/store/store"
import Link from "next/link"
import { useSelector } from "react-redux"

const Navbar = () => {
  const cartLength = useSelector((state: RootState) => state.cart.items).length
  return (
    <header className="w-full py-4 bg-white shadow-sm">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          AssW
        </Link>

        {/* Desktop Nav */}
        <nav className="flex items-center gap-6 text-gray-700">
            <>
              <Link href="/products">Products</Link>
              <Link href="/cart" className="flex"><span>🛒</span> {cartLength>0&&<span className="bg-red-500 relative bottom-1 right-1 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">{cartLength}</span>}</Link>
              <Link href="/about">About</Link>
            </>
        </nav>
      </div>
    </header>
  )
}

export default Navbar

import Link from "next/link"

const Navbar = () => {

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
              <Link href="/about">About</Link>
            </>
        </nav>
      </div>
    </header>
  )
}

export default Navbar

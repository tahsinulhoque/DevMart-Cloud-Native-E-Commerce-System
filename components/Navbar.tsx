import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-10 py-5 border-b border-gray-800 bg-black/80 backdrop-blur-md">
      <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
        DevMart
      </h1>

      <div className="flex items-center gap-8 text-lg">
        <Link className="hover:text-cyan-400 transition" href="/">
          Home
        </Link>

        <Link className="hover:text-cyan-400 transition" href="/products">
          Products
        </Link>

        <Link className="hover:text-cyan-400 transition" href="/cart">
          Cart
        </Link>

        <Link className="hover:text-cyan-400 transition" href="/orders">
          Orders
        </Link>

        <Link className="hover:text-cyan-400 transition" href="/profile">
          Profile
        </Link>
      </div>
    </nav>
  );
}
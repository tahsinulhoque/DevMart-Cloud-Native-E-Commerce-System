import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-5 border-b border-gray-800">
      <h1 className="text-3xl font-bold">DevMart</h1>

      <div className="flex items-center gap-8">
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <Link href="/orders">Orders</Link>
        <Link href="/profile">Profile</Link>
      </div>
    </nav>
  );
}
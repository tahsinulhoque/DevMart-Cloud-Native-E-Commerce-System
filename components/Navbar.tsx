import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 border-b">
      <h1 className="text-2xl font-bold">DevMart</h1>

      <div className="flex gap-6">
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <Link href="/orders">Orders</Link>
        <Link href="/profile">Profile</Link>
      </div>
    </nav>
  );
}
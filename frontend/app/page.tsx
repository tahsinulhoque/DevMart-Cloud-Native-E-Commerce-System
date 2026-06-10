import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="px-10 py-24">
        <div className="max-w-5xl">
          <h1 className="text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Cloud-Native E-Commerce Platform
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-3xl">
            Built with Next.js, Docker, Kubernetes and modern
            cloud-native architecture.
          </p>

          <div className="flex gap-4">
            <button className="bg-cyan-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 transition">
              Shop Now
            </button>

            <button className="border border-gray-700 px-6 py-3 rounded-lg hover:border-cyan-500 hover:text-cyan-400 transition">
              Explore Products
            </button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="px-10 pb-20">
        <h2 className="text-4xl font-bold mb-8">
          Featured Products
        </h2>

        <div className="grid grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
            />
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="px-10 pb-20">
        <h2 className="text-4xl font-bold mb-8">
          Shop By Category
        </h2>

        <div className="grid grid-cols-4 gap-6">
          <div className="rounded-xl bg-gray-950 border border-gray-800 p-8 text-center hover:border-cyan-500 hover:-translate-y-1 transition">
            Electronics
          </div>

          <div className="rounded-xl bg-gray-950 border border-gray-800 p-8 text-center hover:border-cyan-500 hover:-translate-y-1 transition">
            Laptops
          </div>

          <div className="rounded-xl bg-gray-950 border border-gray-800 p-8 text-center hover:border-cyan-500 hover:-translate-y-1 transition">
            Gaming
          </div>

          <div className="rounded-xl bg-gray-950 border border-gray-800 p-8 text-center hover:border-cyan-500 hover:-translate-y-1 transition">
            Accessories
          </div>
        </div>
      </section>
    </main>
  );
}
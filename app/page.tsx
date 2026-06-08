export default function HomePage() {
  return (
    <main className="px-10 py-20">
      <div className="max-w-4xl">
        <h1 className="text-6xl font-bold mb-6">
          Cloud-Native E-Commerce Platform
        </h1>

        <p className="text-xl text-gray-400 mb-8">
          Built with Next.js and designed for Kubernetes-based
          microservices architecture.
        </p>

        <div className="flex gap-4">
          <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold">
            Shop Now
          </button>

          <button className="border px-6 py-3 rounded-lg">
            Explore Products
          </button>
        </div>
      </div>
    </main>
  );
}
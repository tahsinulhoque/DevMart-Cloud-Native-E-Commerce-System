export default function Footer() {
  return (
    <footer className="border-t border-gray-800 mt-20">
      <div className="px-10 py-10">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
          DevMart
        </h2>

        <p className="text-gray-400 mb-3">
          Cloud-Native E-Commerce Platform
        </p>

        <p className="text-gray-500">
          Built with Next.js and designed for Kubernetes-based microservices.
        </p>

        <p className="text-gray-600 mt-6">
          © 2026 DevMart Platform
        </p>
      </div>
    </footer>
  );
}
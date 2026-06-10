export default function OrdersPage() {
  return (
    <main className="px-10 py-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-10">
          Order History
        </h1>

        <div className="space-y-6">
          {/* Order 1 */}
          <div className="border border-gray-800 rounded-xl bg-gray-950 p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold">
                Order #DM-1001
              </h2>

              <span className="px-4 py-2 rounded-full bg-green-500/20 text-green-400">
                Delivered
              </span>
            </div>

            <p className="text-gray-400 mb-2">
              Date: June 08, 2026
            </p>

            <p className="text-gray-400 mb-4">
              Items: MacBook Pro
            </p>

            <div className="flex justify-between items-center">
              <p className="text-2xl font-bold text-cyan-400">
                $2500
              </p>

              <button className="px-5 py-2 border border-gray-700 rounded-lg hover:border-cyan-500 transition">
                View Details
              </button>
            </div>
          </div>

          {/* Order 2 */}
          <div className="border border-gray-800 rounded-xl bg-gray-950 p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold">
                Order #DM-1002
              </h2>

              <span className="px-4 py-2 rounded-full bg-yellow-500/20 text-yellow-400">
                Processing
              </span>
            </div>

            <p className="text-gray-400 mb-2">
              Date: June 05, 2026
            </p>

            <p className="text-gray-400 mb-4">
              Items: Mechanical Keyboard
            </p>

            <div className="flex justify-between items-center">
              <p className="text-2xl font-bold text-cyan-400">
                $120
              </p>

              <button className="px-5 py-2 border border-gray-700 rounded-lg hover:border-cyan-500 transition">
                Track Order
              </button>
            </div>
          </div>

          {/* Order 3 */}
          <div className="border border-gray-800 rounded-xl bg-gray-950 p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold">
                Order #DM-1003
              </h2>

              <span className="px-4 py-2 rounded-full bg-blue-500/20 text-blue-400">
                Shipped
              </span>
            </div>

            <p className="text-gray-400 mb-2">
              Date: June 01, 2026
            </p>

            <p className="text-gray-400 mb-4">
              Items: Gaming Mouse
            </p>

            <div className="flex justify-between items-center">
              <p className="text-2xl font-bold text-cyan-400">
                $80
              </p>

              <button className="px-5 py-2 border border-gray-700 rounded-lg hover:border-cyan-500 transition">
                Track Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
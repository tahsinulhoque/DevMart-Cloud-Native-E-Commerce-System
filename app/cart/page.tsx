export default function CartPage() {
  return (
    <main className="px-10 py-20">
      <h1 className="text-5xl font-bold mb-10">
        Shopping Cart
      </h1>

      <div className="border border-gray-800 rounded-xl p-6 bg-gray-950 mb-6">
        <h2 className="text-2xl font-semibold">
          MacBook Pro
        </h2>

        <p className="text-gray-400 mt-2">
          Quantity: 1
        </p>

        <p className="text-cyan-400 text-xl font-bold mt-4">
          $2500
        </p>
      </div>

      <div className="border border-gray-800 rounded-xl p-6 bg-gray-950">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">
            Total
          </h2>

          <p className="text-3xl font-bold text-cyan-400">
            $2500
          </p>
        </div>

        <button className="w-full mt-6 bg-cyan-500 text-black py-3 rounded-lg font-semibold hover:bg-cyan-400 transition">
          Checkout
        </button>
      </div>
    </main>
  );
}
export default function ProfilePage() {
  return (
    <main className="px-10 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="border border-gray-800 rounded-2xl bg-gray-950 p-10">
          <div className="flex items-center gap-6 mb-10">
            <div className="w-24 h-24 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center text-3xl font-bold text-black">
              T
            </div>

            <div>
              <h1 className="text-4xl font-bold">
                Tahsinul Hoque
              </h1>

              <p className="text-gray-400 mt-2">
                Cloud & DevOps Engineer
              </p>

              <p className="text-cyan-400 mt-1">
                tahsin@example.com
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6 mb-10">
            <div className="border border-gray-800 rounded-xl p-6 text-center">
              <h3 className="text-3xl font-bold text-cyan-400">
                12
              </h3>
              <p className="text-gray-400 mt-2">
                Orders
              </p>
            </div>

            <div className="border border-gray-800 rounded-xl p-6 text-center">
              <h3 className="text-3xl font-bold text-cyan-400">
                5
              </h3>
              <p className="text-gray-400 mt-2">
                Wishlist
              </p>
            </div>

            <div className="border border-gray-800 rounded-xl p-6 text-center">
              <h3 className="text-3xl font-bold text-cyan-400">
                3
              </h3>
              <p className="text-gray-400 mt-2">
                Reviews
              </p>
            </div>
          </div>

          <div className="border border-gray-800 rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-4">
              Account Information
            </h2>

            <div className="space-y-3">
              <p>
                <span className="text-gray-400">Name:</span>{" "}
                Tahsinul Hoque
              </p>

              <p>
                <span className="text-gray-400">Email:</span>{" "}
                tahsin@example.com
              </p>

              <p>
                <span className="text-gray-400">Role:</span>{" "}
                Customer
              </p>

              <p>
                <span className="text-gray-400">Member Since:</span>{" "}
                June 2026
              </p>
            </div>
          </div>

          <button className="mt-8 bg-cyan-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 transition">
            Edit Profile
          </button>
        </div>
      </div>
    </main>
  );
}
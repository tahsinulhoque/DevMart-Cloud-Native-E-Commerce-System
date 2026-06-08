export default function RegisterPage() {
  return (
    <main className="flex items-center justify-center min-h-[80vh]">
      <div className="w-full max-w-md border border-gray-800 rounded-xl p-8 bg-gray-950">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Register
        </h1>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 rounded-lg bg-black border border-gray-700"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-lg bg-black border border-gray-700"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-lg bg-black border border-gray-700"
          />

          <button
            className="w-full bg-cyan-500 text-black py-3 rounded-lg font-semibold hover:bg-cyan-400 transition"
          >
            Create Account
          </button>
        </form>
      </div>
    </main>
  );
}
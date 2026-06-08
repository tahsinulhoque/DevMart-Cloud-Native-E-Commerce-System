type ProductProps = {
  name: string;
  price: number;
};

export default function ProductCard({
  name,
  price,
}: ProductProps) {
  return (
    <div className="border border-gray-800 rounded-xl p-6 bg-gray-950 hover:border-cyan-500 hover:-translate-y-1 transition-all duration-300">
      <div className="h-40 bg-gradient-to-br from-cyan-900 to-blue-950 rounded-lg mb-4"></div>

      <h3 className="text-xl font-semibold mb-2">
        {name}
      </h3>

      <p className="text-gray-400 mb-4">
        Premium Product
      </p>

      <p className="text-2xl font-bold mb-4">
        ${price}
      </p>

      <button className="w-full rounded-lg py-2 bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition">
        View Details
      </button>
    </div>
  );
}
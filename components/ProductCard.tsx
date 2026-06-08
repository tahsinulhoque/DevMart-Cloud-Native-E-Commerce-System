type ProductProps = {
  name: string;
  price: number;
};

export default function ProductCard({
  name,
  price,
}: ProductProps) {
  return (
    <div className="border border-gray-800 rounded-xl p-6 hover:border-white transition duration-300">
      <div className="h-40 bg-gray-900 rounded-lg mb-4"></div>

      <h3 className="text-xl font-semibold mb-2">
        {name}
      </h3>

      <p className="text-gray-400 mb-4">
        Premium Product
      </p>

      <p className="text-2xl font-bold mb-4">
        ${price}
      </p>

      <button className="w-full border rounded-lg py-2 hover:bg-white hover:text-black transition">
        View Details
      </button>
    </div>
  );
}
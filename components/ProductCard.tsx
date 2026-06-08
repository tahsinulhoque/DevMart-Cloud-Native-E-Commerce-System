type ProductProps = {
  name: string;
  price: number;
};

export default function ProductCard({
  name,
  price,
}: ProductProps) {
  return (
    <div className="border p-4 rounded">
      <h3>{name}</h3>
      <p>${price}</p>
    </div>
  );
}
export default function Cart({ item }) {
  return (
    <div className="border-2 border-black rounded-lg p-2">
      <h2>{item.name}</h2>
      <p>{item.price}</p>
    </div>
  );
}

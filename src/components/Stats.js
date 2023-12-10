export default function Stats({ items }) {
  if (!items.length)
    return <p className="stats">Start adding the items in your packing list</p>;

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You have packed everything and ready to go!!!"
          : `You have ${numItems} items in your list and you already packed
        ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}

export default function Stats({ items }) {
  if (!items.length) {
    return (
      <footer className="stats">
        <em>You have not added any item.</em>
      </footer>
    );
  }
  const numItems = items.length;
  let numPacked = items.filter((item) => item.packed).length;
  const percentage = (numPacked / numItems) * 100;

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You packed everything. Now be ready to go. 🚘"
          : `You have ${items.length} in your list and you packed ${numPacked} (
          ${percentage} %).`}
      </em>
    </footer>
  );
}

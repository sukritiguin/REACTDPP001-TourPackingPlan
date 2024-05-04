export default function Item({ item, handleRemoveItems, handleToggleItem }) {
  return (
    <li key={item.id}>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        <input
          type="checkbox"
          name=""
          id=""
          value={item.packed}
          onChange={() => {
            handleToggleItem(item.id);
          }}
        />
        {item.quantity} {item.description}
        <button
          onClick={() => {
            handleRemoveItems(item.id);
          }}
        >
          ❌
        </button>
      </span>
    </li>
  );
}

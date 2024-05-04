import { useState } from "react";

import Item from "./Item";

export default function PackingList({
  items,
  setItems,
  handleRemoveItems,
  handleToggleItem,
}) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems = items;

  if (sortBy == "input") {
    sortedItems = items;
  } else if (sortBy == "description") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  } else if (sortBy == "packed") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  } else if (sortBy == "quantity") {
    sortedItems = items.slice().sort((a, b) => b.quantity - a.quantity);
  }
  return (
    <div className="list">
      <ul style={{ margin: 0, padding: 0 }}>
        {sortedItems.map((item, index) => (
          <Item
            key={index}
            item={item}
            handleRemoveItems={handleRemoveItems}
            handleToggleItem={handleToggleItem}
          />
        ))}
      </ul>
      <div className="action">
        <select
          name=""
          id=""
          value={sortBy}
          onChange={(e) => {
            setSortBy(e.target.value);
          }}
        >
          <option value="input">Sort by input</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
          <option value="quantity">Sort by quantity</option>
        </select>

        <button
          onClick={(e) => {
            const isConfirmed = window.confirm(
              "Are you sure you want to delete all items ?"
            );
            if (isConfirmed) setItems([]);
          }}
        >
          Clear List
        </button>
      </div>
    </div>
  );
}

import Item from "./Item";
import { useState } from "react";

export default function Form({ items, handleAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  // const [items, setItems] = useState([]); // Lifed up to its parent components because its parents need to use this

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = {
      description: description,
      quantity: quantity,
      packed: false,
      id: items.length + 1,
    };

    handleAddItems(newItem);

    setDescription("");
    setQuantity(1);
  }

  return (
    <>
      <form className="add-form" onSubmit={handleSubmit}>
        <h3>What do you need for the trip ?</h3>
        <select
          name=""
          id=""
          value={quantity}
          onChange={(e) => {
            console.log(e);
            setQuantity(e.target.value);
            console.log(e);
          }}
        >
          {Array.from({ length: 20 }, (_, index) => index + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Item..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </>
  );
}

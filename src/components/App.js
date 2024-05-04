import { useState } from "react";
import { addSyntheticLeadingComment } from "typescript";
import "../../src/styles.css";

import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((prevItems) => [...prevItems, item]);
  }

  function handleRemoveItems(itemId) {
    setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  }

  function handleToggleItem(itemId) {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id == itemId ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <div className="">
      <Logo />
      <Form items={items} handleAddItems={handleAddItems} />
      <PackingList
        items={items}
        setItems={setItems}
        handleRemoveItems={handleRemoveItems}
        handleToggleItem={handleToggleItem}
      />
      <Stats items={items} />
    </div>
  );
}

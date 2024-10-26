"use client";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import { useState } from "react";
export default function Page() {
  const [items, setItems] = useState(itemsData);
  let itemArray = itemsData.map((item) => ({ ...item })); //return new array items
  const handleAddItem = (newItem) => {
    //Add new item into item in the list
    setItems([...itemArray, newItem]);
  };
  return (
    <main className="bg-slate-950">
      <div>
        <h1 className="font-bold m-2 text-cyan-50 text-2xl p-4">
          Shopping lists
        </h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} />
      </div>
    </main>
  );
}

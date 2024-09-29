"use client";
import { useState } from "react";
export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };
  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  let btninDisabled = false;
  let btndeDisabled = false;
  if (quantity == 20) {
    btninDisabled = true;
  }
  if (quantity == 1) {
    btndeDisabled = true;
  }
  let btnStyles =
    "bg-blue-600 text-white rounded py-2 m-2 px-4 mt-5 hover:bg-blue-400 active:bg-yellow-400 disabled:bg-gray-500";
  return (
    <div className="bg-gray-300 p-5 w-96 rounded m-5">
      <h2 className="font-bold m-2">{quantity}</h2>
      <div></div>
      <button
        className={btnStyles}
        onClick={() => decrement()}
        disabled={btndeDisabled}
      >
        Decrement
      </button>
      <button
        className={btnStyles}
        onClick={() => increment()}
        disabled={btninDisabled}
      >
        Increment
      </button>
    </div>
  );
}

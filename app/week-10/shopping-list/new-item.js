"use client";
import { useState } from "react";
export default function NewItem({onAddItem}) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

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
  const resetValue = () => {
    setName("");
    setQuantity(1);
    setCategory("produce");
  };
  const randomString=()=>{
    const characters="3h2KJH3k2j3H1k2J3";
    let rs='';
    for(let i=0;i<characters.length;i++){
      rs+=characters.charAt(Math.floor(Math.random() * 17 ));
    }
    return rs;
  }
    
  const handleSubmit = (event) => {
    event.preventDefault();
    //const id=randomString();
    const item = {
      //id: id,
      name: name,
      quantity: quantity,
      category: category,
    };
    console.log(item);
    alert(`Added item:${name}, quantity:${quantity} and category:${category}`);
    onAddItem(item);
    resetValue();
  };
  let btninDisabled = false;
  let btndeDisabled = false;
  if (quantity == 20) {
    btninDisabled = true;
  }
  if (quantity == 1) {
    btndeDisabled = true;
  }
  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleCategory = (event) => {
    setCategory(event.target.value);
  };
  let btnStyles =
    "bg-blue-600 text-white rounded py-2 m-2 px-4 mt-5 hover:bg-blue-400 active:bg-yellow-400 disabled:bg-gray-500";
  return (
    <form onSubmit={handleSubmit} className="bg-black p-5">
      <div className="bg-gray-300 p-5 w-96 rounded ">
        <div className="mb-3">
          <label className="inline-block w-30">Name:</label>
          <input
            type="text"
            placeholder="Item name"
            value={name}
            onChange={handleName}
            required
            className="px-2 py-0.5"
          />
        </div>
        <div className="mb-3">
          <label className="inline-block">Category:</label>

          <select
            value={category}
            onChange={handleCategory}
            className="px-2 py-0.5 ml-8 "
            selected
          >
            <option value="">--Select option---</option>
            <option value="produce">Produce</option>
            <option value="bakery">Bakery</option>
            <option value="frozen foods">Frozen Foods</option>
            <option value="canned goods">Canned Goods</option>
            <option value="dry goods">Dry Goods</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="bg-slate-400 bodered">
          <h2 className="font-bold m-2 pt-2 ">{quantity}</h2>

          <button
            type="button"
            className={btnStyles}
            onClick={() => decrement()}
            disabled={btndeDisabled}
          >
            Decrement
          </button>
          <button
            type="button"
            className={btnStyles}
            onClick={() => increment()}
            disabled={btninDisabled}
          >
            Increment
          </button>
        </div>

        <div>
          <button
            className="bg-blue-600 text-white rounded px-5 p-2 mt-5 hover:bg-blue-400 active:bg-yellow-400 disabled:bg-gray-500"
            type="submit"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

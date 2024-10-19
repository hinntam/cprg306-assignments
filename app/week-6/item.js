export default function Item({ itemObj }) {
    return (
      <div className="bg-gray-500 text-cyan-50 border p-5">
        <h2 className="font-bold text-xl">{itemObj.name}</h2>
        <p>
          Buy:{itemObj.quantity} in {itemObj.category}
        </p>
      </div>
    );
  }
  
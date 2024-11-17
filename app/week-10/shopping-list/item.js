export default function Item({ itemObj, onSelect , onDelete }) {
    return (
      <>
        
      <div className="bg-gray-500 text-cyan-50 border p-5" onClick={()=> onSelect(itemObj)}>
        <h2 className="font-bold text-xl">{itemObj.name}</h2>
        <p>
          Buy:{itemObj.quantity} in {itemObj.category}
        </p>
        
      </div>
      <button className="border rounded bg-blue-600 text-white p-1 m-5" onClick={()=>onDelete(itemObj)}>Delete</button>
      </>
      
    );
  }
  
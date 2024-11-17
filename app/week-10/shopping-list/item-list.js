"use client"
import { useState } from "react";
import Item from "./item";

//import items from "./items.json" 
export default function ItemList({items, onItemSelect, onItemDelete }) {
  const[sortBy, setSortBy]=useState("name");
  const[group,setGroup]=useState(false);
  const[lstGroup,setLstGroup]=useState({});
  
  sortBy=="name"? items.length > 0 && items.sort((a,b)=>{
    if(a.name < b.name) return -1;
    if(a.name > b.name) return 1;
    return 0;
  }):  items.sort((a,b)=>{
    if(a.category < b.category) return -1;
    if(a.category > b.category) return 1;
    return 0;
 })
 const ListGroup=()=>items.reduce((groupCategory,item)=>{
    let category=item.category;
    if(groupCategory[category]==null) groupCategory[category]=[];
    groupCategory[category].push(item);
    return groupCategory;
 },{})

 
  return (
    <div>
      <button className="bg-white text-black ml-5 rounded p-2" onClick={()=>{setSortBy("name");setGroup(false);}}>Sort by name</button> 
      <button className="bg-white text-black ml-5 rounded p-2" onClick={()=>{setSortBy("category");setGroup(false);}}>Sort by category</button> 
      {
        group?(
          <div className="bg-black">
            {
              Object.entries(lstGroup).map(([key, value]) =>(
                <div key={key}>
                  <h2 className="text-xl font-bold text-blue-50">{key}</h2>
                  <ul>
                  {
                      value.map((item)=>(
                          <li className="p-2 m-4 bg-slate-900 max-w-sm hover:bg-orange-800 cursor-pointer" key={item.id}>
                              <Item itemObj={item} onSelect={onItemSelect} onDelete={onItemDelete} />
                          </li>
                      ))
                  }
                </ul>
                </div>
              ))
            }
          </div>
        ):(
          <ul>
            {
                items.length > 0 && items.map((item)=>(
                    <li className="p-2 m-4 bg-slate-900 max-w-sm hover:bg-orange-800 cursor-pointer" key={item.id}>
                        <Item itemObj={item} onSelect={onItemSelect} onDelete={onItemDelete}/>
                    </li>
                ))
            }
          </ul>
        )
      }
      
    </div>
  );
}

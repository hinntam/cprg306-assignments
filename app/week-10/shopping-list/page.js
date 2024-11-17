"use client"
import MealIdeas from "./meal-idea";
import ItemList from "./item-list";
import NewItem from "./new-item";
import { getItems,addItem,deleteItem } from "../_services/shopping-list-service";
import { useEffect, useState } from "react";
import { useUserAuth } from "../_utils/auth-context";
import ProtectedPage from "../protected/page";
import Link from "next/link";
export default function Page(){
    const{user}=useUserAuth();
    const[items ,setItems]=useState([]);
    //let itemArray=itemsData.map((item)=>({...item}));//return new array items
    const[selectedItemName ,setSelectedItemName]=useState('');
    const handleAddItem=(newItem)=>{
        //Add new item into item in the list
        addItem(user.uid,newItem);
        setItems([...items,newItem]);

    }
   

    const handleItemSelect=(item)=>{
        const{
            name
        }=item;
        //console.log(name.split(' ')[0].replace(',','').trim());
        setSelectedItemName(name.split(' ')[0].replace(',','').trim());
    }
    const handleItemDelete=async(item)=>{
        //Del items
        const{
            id
        }=item;
        
        await deleteItem(user.uid,id);
    }
    const loadItems=async()=>{
        const rs= await getItems(user.uid,setItems);
        console.dir(items);
    }
    useEffect(()=>{
        if(user){
            loadItems();
        }
        
    },[items]);
    return(
        <main className="bg-slate-950">
            {user?(
            <div>
                <h1 className="font-bold m-2 text-cyan-50 text-2xl p-4">
                Shopping lists
                </h1>
                <div className="flex">
                <div className="flex-1 max-w-sm m-2">
                    <NewItem onAddItem={handleAddItem}/>
                    <ItemList items={items} onItemSelect={handleItemSelect} onItemDelete={handleItemDelete}/>
                
                </div>
                
                <MealIdeas ingredient={selectedItemName}/>
                </div>
                
                

            </div>    
            ):(
                <ProtectedPage/>
            )}
           
        </main>
    )
}
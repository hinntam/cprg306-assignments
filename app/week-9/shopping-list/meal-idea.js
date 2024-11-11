"use client"

import { useEffect, useState } from "react";

//The MealIdeas component is responsible for fetching and displaying meal ideas

export default function MealIdeas({ingredient}){
    const[meals,setMeals]=useState([]);
    const[header,setHeader]=useState('Select an item to see meal ideas');
    async function fetchMealIdeas(ingredient){
        try{
            const data=await fetch(
                `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
            );
            //If not response OK
            //console.dir(data);
           if(!data.ok)console.log(data.statusText);
            const rs=await data.json();
            return rs;
        }
        catch(error){
            console.log(`Error:${error.message}`); 
        }
        
    }
    async function loadMealIdeas(ingredient) {
        if(ingredient!=''){
            const itemmeal= await fetchMealIdeas(ingredient);
            console.dir(itemmeal);
            if(itemmeal.meals!=null) {
                setHeader(`Here are some meal ideas using :${ingredient}`);
                setMeals([itemmeal.meals]);
            }
            else{
                setHeader(`No meal ideas found for bananas:${ingredient}`);
                setMeals('');
            }
        }
    }
    useEffect(()=>{
        loadMealIdeas(ingredient);
        console.log(ingredient);
        
    },[ingredient]);
    return(
            <div className="flex-1 max-w-sm m-2 text-cyan-50 font-bold m-5">
                <h3 className="text-cyan-50">My meals</h3>
                <div>{header}</div>
                {
                    meals!= null && meals.length > 0 &&
                    meals.map((meal) =>
                        meal.map((m)=>(
                            
                            <div className="text-cyan-50" key={m.idMeal}>
                                
                                <div className="p-2 m-1 bg-slate-900 max-w-sm hover:bg-orange-800 cursor-pointer">{m.strMeal}</div>

                            </div>
                        ))
                    )
                }
            </div>
            
            
    );
}
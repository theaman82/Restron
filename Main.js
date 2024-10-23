import React, { useState } from 'react'
import { recipesData } from './components/recipes';
import RecipesCard from './components/RecipesCard';
import OrderSection from './components/OrderSection';

const Main = () => {

    const [recipes,setResipes] = useState(recipesData);
    const [orderList, setOrderList] = useState([])

    const handleAdd = (recipe)=>{
      // if order list have same recipe in that list then increase order qty
      const updateOrderlist = orderList.map((item)=>{
        if(item.recipeId === recipe.recipeId){
            return {...item, qty: item.qty + 1}
        }
        return item;
      })

      // if orderlist don't have this recipe
      if(!updateOrderlist.some((item)=> item.recipeId === recipe.recipeId)){
        updateOrderlist.push({...recipe, qty:1})
      }

      setOrderList(updateOrderlist);
    }

    const handleRemove = (recipe)=>{
     let updateOrderlist;
      updateOrderlist=orderList
      .map((item)=>{
        if(item.recipeId === recipe.recipeId  && item.qty > 0){
            return {...item, qty: item.qty - 1}
        }
        return item;
      }).filter((item)=>item.qty > 0)

      setOrderList(updateOrderlist)
    }

    const handleReset  = () =>{
      setOrderList([]);
    }

  return (
    <div className='flex flex-1 h-screen '>
        <div className='w-9/12 flex flex-col gap-5 bg-slate-100 h-screen p-5'>
            <div className='flex'>
                <h2 className='text-red-500 text-2xl font-semibold border-l-4 pl-2 border-l-blue-400'>All Recipes</h2>
            </div>
            <div className='grid grid-cols-4 gap-5 overflow-y-scroll h-[100vh]'>
                {recipes.map((recipe,index)=>(<RecipesCard handleAdd={()=>handleAdd(recipe)} handleRemove={()=>handleRemove(recipe)} key={index} recipe={recipe}/> ))}
            </div>
        </div>

        <div className='w-3/12 bg-sky-100 h-screen p-5'>
            <div className='flex flex-1'>
            <h2 className='text-red-500 text-2xl font-semibold border-l-4 pl-2 border-l-blue-400'>My Order</h2>
            </div>
            <OrderSection handleReset={handleReset} orderList={orderList}/>
        </div>
        
    </div>
  )
}

export default Main
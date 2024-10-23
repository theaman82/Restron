import React, { useState } from 'react'

const RecipesCard = ({recipe, handleAdd, handleRemove}) => {


  return (
    <div  className=' flex flex-col p-2 b-b-2 bg-slate-200 border rounded-md border-gray-400 hover:shadow-2xl'>
    <img src={recipe.image} className='h-[200px] object-cover  rounded-md' />
        <div className='px-3 py-2'>
                           <div className='flex mb-1 items-center'>
                                <flex className="flex flex-col mb-1">
                                        <div className='flex-1 font-semibold text-xl text-left'>{recipe.name}</div>
                                        <div className='flex-1 font-semibold text-gray-800 text-sm text-left'>{recipe.category}</div>
                                </flex>
                                <div className='flex-1 text-right text-2xl font-semibold'>₹{recipe.price}</div>
                           </div>
                            <div className='flex-1 flex gap-3 items-center text-left'>
                                <div className='flex gap-1 items-center'>
                                    <button onClick={handleRemove} className='bg-red-700 text-white p-1 rounded-md text-xl '>Remove</button>
                                    <button onClick={handleAdd} className='bg-green-700 text-white p-1 rounded-md text-xl '>Add</button>
                                </div>
                               
                                {recipe.isVeg && <img src='/vegNonveg.png' className='w-[8vh] h-[8vh] object-cover object-left'/>}
                                {!recipe.isVeg && <img src='/vegNonveg.png' className='w-[8vh] h-[8vh] object-cover object-right'/>}
                               
                            </div>
         </div>
    </div>
  )
}

export default RecipesCard
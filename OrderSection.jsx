import React, { useEffect, useState } from 'react'
import OrderItem from './OrderItem'

const OrderSection = ({orderList,handleReset}) => {

  const [totalPrice, setTotalprice] = useState(0)
  const [totalQty, setTotalQty] = useState(0)

  useEffect(()=>{
    setTotalQty(orderList.reduce((qty,item)=> qty + item.qty,0))
    setTotalprice(orderList.reduce((total,item)=> total + item.price * item.qty , 0));
  })

  

  return (
   <>
    <div className='flex flex-col mt-5 gap-2 overflow-y-scroll h-[72vh]'>
       {orderList.map((order, index )=> <OrderItem key={index} {...order}/>)}
    </div>

    <div className='flex flex-1  px-2 py-1 rounded-md flex-col text-left'>
      <h2 className='text-xl font-semibold'>Total items: {totalQty}</h2>
      <h1 className='text-2xl font-bold'>Total Amount: {totalPrice}</h1>
      <button onClick={handleReset} className='bg-green-800 p-1 rounded-md text-white font-semibold'>Order Now</button>
    </div>
   </>
  )
}

export default OrderSection
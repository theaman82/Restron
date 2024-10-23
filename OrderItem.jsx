import React from 'react'

const OrderItem = (props) => {
  return (
    <div>
         <div className='bg-white border rounded-xl flex '>
            <img src={props.image} className='flex-1 max-w-[100px] object-cover rounded-s-xl ' />
            <div className='p-2 flex-[1]'>
                <h2 className='font-semibold text-lg'>{props.name}</h2>
                <p className='font-bold'>₹{props.price}</p>
                <p>Qty: {props.qty}</p>
            </div>
        </div>
    </div>
  )
}

export default OrderItem
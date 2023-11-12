import React, { memo } from 'react'
import { clearCart } from '@/features/Cart.slice'
import { useDispatch } from 'react-redux'
import Link from 'next/link'

export default memo(function CartTfoot({ totalPrice }) {
    const dispatch = useDispatch()
    return (
        <tfoot>
            <tr className='border-[a1a1a1] border-t-[2px]'>
                <td colSpan="100%" className='px-4 py-3'>
                    <div className='flex justify-between items-center'>
                        <p className='text-[25px] text-[#000] text-bold'>Total: ${ totalPrice }</p>
                        <div className='flex gap-[20px]'>
                            <button className='bg-[#000] min-w-max rounded-[50px] text-[#fff] text-[20px] px-[25px] py-[10px] border-[2px] border-[#000] hover:scale-[1.07] easy-in transition-all' onClick={ () => dispatch(clearCart()) }>Clear Shopping Cart</button>
                            <Link href="/products" className='bg-[#ffffff] border-[2px] border-[#000] min-w-max rounded-[50px] text-[20px] px-[25px] py-[10px] hover:scale-[1.07] easy-in transition-all'>Continue Shopping</Link>
                        </div>
                    </div>
                </td>
            </tr>
        </tfoot>
    )
})
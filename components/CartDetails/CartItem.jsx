"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, changeProdQty } from "@/features/Cart.slice"
import Link from 'next/link';
import { motion, AnimatePresence } from "framer-motion"

export default function CartItem({ prod }) {
    const { qty, id } = prod
    const product = useSelector(state => state.products.data.find(e => +e.prodId === +id))
    const [prodQty, setProdQty] = useState(qty);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(changeProdQty({ qty: prodQty, id: id }))
    }, [prodQty])

    const confirmQty = () => {
        if (prodQty < 1 || prodQty === "") setProdQty(1)
        if (prodQty > 9999) setProdQty(9999)
    }

    return <>
        <tr>
            <td className="px-6 py-2">
                <div className="flex items-center" initial={ { opacity: 1 } } exit={ { opacity: 0 } } transition={ { duration: 0.5 } }>
                    <Link href={ `/products/details/${ product.prodId }` }>
                        <Image src={ product.prodImg } alt="Product Image" className="w-[150px] h-[150px] object-contain mr-4 cursor-pointer" width={ 500 } height={ 500 } />
                    </Link>
                    <div>
                        <h2 className="text-lg font-semibold">{ product.prodName }</h2>
                        <p className="text-gray-500">{ product.prodComment }</p>
                    </div>
                </div>
            </td>
            <td className="px-6 py-2 text-[18px]">${ product.prodPrice }</td>
            <td className="px-6 py-2">
                <div className="flex">
                    <button onClick={ () => prodQty > 1 ? setProdQty(+prodQty - 1) : null }
                        className='border-[2px] border-gray p-0.5 bg-transparent rounded-l-[8px]'>
                        <Image src="/cartImages/minus.png" className='max-w-[30px]' alt='+' width={ 100 } height={ 100 } />
                    </button>
                    <input type="number" className="cart-prods-count py-1 px-1 font-[500] bordertext-center focus:outline-none max-w-[55px] text-center border-[2px] border-gray" value={ prodQty } min={ 1 } max={ 9999 } onBlur={ () => confirmQty() } onChange={ e => {
                        setProdQty(e.target.value > 9999 ? 9999 : e.target.value);
                    } } />
                    <button onClick={ () => prodQty < 9999 ? setProdQty(+prodQty + 1) : null }
                        className='border-[2px] border-gray p-0.5 bg-transparent rounded-r-[8px]'>
                        <Image src="/cartImages/plus.png" className='max-w-[30px]' alt='+' width={ 100 } height={ 100 } />
                    </button>
                </div>
            </td>
            <td className="px-6 py-2 text-[20px] max-w-[150px] w-[150px]">${ product.prodPrice * prodQty }</td>
            <td className="px-6 py-2">
                <Image src="/cartImages/remove.png" alt='Remove' width={ 100 } height={ 100 } onClick={ () => dispatch(removeFromCart(id)) } className='w-[70px] object-cover cursor-pointer' />
            </td>
        </tr>

    </>
}
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function EmptyCart() {
    return (
        <div className='mx-auto flex container gap-[30px] flex-col items-center justify-center'>
            <h5 className='text-[35px] text-bold flex gap-[20px] items-center justify-center'>Cart is Empty
                <Image src="/cartImages/empty-cart.png" alt='Empty Cart' width={ 500 } height={ 500 } className='w-[100px] h-[100px]' /></h5>
            <Link href="/products" className='text-[#414051] text-[35px] underline cursor-pointer flex justify-center items-center pl-[10px]'><span>Continue shoping</span>
                <Image src="/slideImages/arrow.png" alt='Continue' width={ 500 } height={ 500 } className='w-[70px] h-[70px] scale-[1.2]' />
            </Link>
        </div>
    )
}

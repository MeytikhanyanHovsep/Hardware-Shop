import Image from 'next/image'
import Link from 'next/link'
import React, { memo } from 'react'
import SearchImg from "@/public/search.png"
import CloseImg from "@/public/close.png"
import MenuImg from "@/public/burger-menu.png"
import CartImg from "@/public/cart.png"

export default memo(function HeaderItems({ setMobileMenu, searchBar, cartLength, setSearchBar }) {
    return <>
        <div className='flex gap-[25px] z-60'>
            <button onClick={ () => setSearchBar(!searchBar) } className='relative w-[27px] h-[27px]"'>
                <Image src={ SearchImg } className={ `transition-all duration-300 absolute left-0 top-[50%] translate-y-[-50%] ${ !searchBar ? "object-cover max-w-[27px] max-h-[27px]" : "opacity-0" }` } alt="search" />
                <Image src={ CloseImg } className={ `transition-all duration-300 absolute left-0 top-[50%] translate-y-[-50%] ${ searchBar ? "object-cover max-w-[27px] max-h-[27px]" : "opacity-0" }` } alt='close' />
            </button>
            <Link href="/cart" className='relative'>
                { !!cartLength && <span className='grid place-items-center w-[20px] h-[20px] absolute right-[-5px] top-[-3px] p-[2px] text-[12px] rounded-full bg-[#0156ff] text-white'>{ cartLength }</span> }
                <Image src={ CartImg } className='object-cover max-w-[35px] max-h-[35px]' alt='cart' />
            </Link>
            <button onClick={ () => setMobileMenu(e => !e) } className='hidden md:block'>
                <Image src={ MenuImg } alt='menu' className='object-cover max-w-[35px] min-w-[35px]' />
            </button>
        </div>
    </>
})

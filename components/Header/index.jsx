"use client"
import React, { useState, useMemo, useRef } from 'react'
import Link from 'next/link'
import LogoImg from "@/public/logo.png";

import Image from 'next/image';
import { useSelector } from 'react-redux';
import NavItems from './NavItems';
import NavMenu from './NavMenu';

function Header() {
    const cart = useSelector(state => state.cart)
    const [mobileMenu, setMobileMenu] = useState(false);
    const height = useRef(null)
    const [searchBar, setSearchBar] = useState(false)

    const style = mobileMenu ? { top: `${ height.current.clientHeight + 2 }px`, background: "white" }
        : { top: `-500%`, background: "transparent" }
    return <>
        <header ref={ height } className='bg-[#fff] w-full relative'>
            <nav className='my-0 mx-auto container border-b-[2px] border-[#CACDD8] h-[90px] flex justify-between items-center gap-[50px] xs:px-[20px] z-50 lg:gap-[30px]'>
                <Link href="/" className='z-60'>
                    <Image src={ LogoImg } priority className='scale-[2] max-w-[50px] max-h-[30px] object-cover' alt='logo' />
                </Link>
                <NavMenu style={ style } hidden={ searchBar } />
                <NavItems cartLength={ cart.length } searchBar={ searchBar } setSearchBar={ setSearchBar } setMobileMenu={ setMobileMenu } />
            </nav>
        </header>
    </>
}; export default Header;
"use client"
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import LogoImg from "@/public/logo.png";
import Image from 'next/image';
import { useSelector } from 'react-redux';
import NavItems from './NavItems';
import NavMenu from './NavMenu';

function Header() {
    const cart = useSelector(state => state.cart)
    const [openMenu, setOpenMenu] = useState(window.innerWidth > 1000 ?true:false);
    const [searchBar, setSearchBar] = useState(false)
    
    return <>
        <header className='bg-[#fff] w-full relative'>
            <nav className='my-0 mx-auto container border-b-[2px] border-[#CACDD8] py-[15px] flex justify-between items-center gap-x-[50px] xs:px-[20px] z-50 lg:gap-x-[30px] md:flex-wrap'>
                <Link href="/" className='z-60'>
                    <Image src={ LogoImg } priority className='scale-[2] max-w-[50px] max-h-[30px] object-cover' alt='logo' />
                </Link>
                <NavMenu searchBar={ searchBar } openMenu={ openMenu } />
                <NavItems cartLength={ cart.length } searchBar={ searchBar } setSearchBar={ setSearchBar } setOpenMenu={ setOpenMenu } />
            </nav>
        </header>
    </>
}; export default Header;
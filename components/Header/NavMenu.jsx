import Link from 'next/link'
import React, { memo } from 'react'
import { useSelector } from 'react-redux';
import { AnimatePresence, motion } from "framer-motion"
import SearchImg from "@/public/search.png"
import Image from 'next/image';

export default memo(function NavMenu({ openMenu, searchBar }) {
    const categories = useSelector(state => state.categories);

    return <>
            <div className='flex flex-col w-full items center relative md:order-3'>
        <AnimatePresence >
                { searchBar ? <motion.div className='flex mx-auto justify-between gap-[30px] overflow-hidden py-[20px] bg-[#f5f7ff] px-[30px] rounded-[40px]' initial={ { width: 0 } } transition={ { duration: 0.5 } } animate={ { width: "100%" } } exit={ { width: 0, opacity: 0 } } >
                    <input placeholder='Search entiere store here...' className='bg-transparent w-full h-full outline-none border-none ' />
                    <Image src={ SearchImg } className='w-[20px] h-[20px]' alt='searchImg' />
                </motion.div>
                    : <motion.ul
                        className={ `flex gap-[25px] nav-menu lg:gap-[15px] md:gap-[5px] font-bold justify-center transition-all md:justify-start overflow-hidden z-50 md:flex-col left-0 sm:pt-[20px] xs:pt-[20px]` }
                        initial={ { opacity: 0 } }
                        animate={ { opacity: 1, height: openMenu ? "auto" : 0} }
                        transition={ { ease: "linear", duration: 0.2 } } exit={ { opacity: 0 } }>
                        <li className='md:container md:flex'><Link className='sm:hover:bg-[#342aff4a] px-[10px] rounded-md md:w-full py-[5px]' href={ "/" }>Home</Link></li>
                        <li className='md:container md:flex'><Link className='sm:hover:bg-[#342aff4a] px-[10px] rounded-md md:w-full py-[5px]' href={ "/about" }>About</Link></li>
                        <li className="group relative">
                            <Link href="/products" className='sm:hover:bg-[#342aff4a] px-[10px] rounded-md md:w-full py-[5px]'>Categories</Link>
                            <ul className='absolute left-[50%] translate-x-[-50%] flex-col duration-[500s] transition-all hidden shadow-sm shadow-[gray] opacity-0 group-hover:flex group-hover:opacity-[1] rounded-md py-[20px] px-[30px] gap-[10px] bg-white'>
                                { categories.map((elm, ind) => (
                                    <li key={ ind } className=''>
                                        <Link className='sm:hover:bg-[#342aff4a] px-[10px] rounded-md md:w-full py-[5px]' href={ "/products/" + elm.toLowerCase() }>{ elm }</Link>
                                    </li>
                                )) }
                            </ul>
                        </li>
                        <li className='md:container md:flex'><Link className='sm:hover:bg-[#342aff4a] px-[10px] rounded-md md:w-full py-[5px]' href={ "/contacts" }>Contacts</Link></li>
                        <div className='hidden sm:block xs:block container border-b-[2px] border-[#CACDD8] mx-auto rounded-[10px] p-[7px]'></div>
                    </motion.ul> }
        </AnimatePresence>
            </div>
    </>
})

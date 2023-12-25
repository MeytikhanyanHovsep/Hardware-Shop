import React, { memo } from 'react'
import Image from 'next/image'
import { AnimatePresence, easeIn, motion } from "framer-motion"

export default memo(function FooterMenu({ open, elms, ind, fn }) {
    return (
        <AnimatePresence>
            <motion.div  className='overflow-hidden md:border-b-[2px] border-[#525252]' initial={ { height: "auto" } } transition={ { duration: 0.3, type: "ease" } } animate={ { height: (open || window.innerWidth > 1000 ? "auto" : 40) } }>
                <h4 className='text-[#a1a1a1] md:min-w-full min-h-[40px] md:hover:bg-[#ffffff53] cursor-pointer rounded-md duration-[0.2s] ease-linear flex items-center justify-between md:text-white md:text-[11px]'
                    onClick={ () => fn(ind) }
                >
                    { elms.shift() }
                    <Image src="/slideImages/arrow.png" width={ 50 } height={ 50 } alt='' className={ `transition-all w-[30px] h-[30px] duration-[0.3s] hidden md:block${ open ? " rotate-[270deg]" : " rotate-[90deg]" }` } />
                </h4>
                <ul className='flex pl-[10px] pb-[10px] flex-col gap-[5px]'>
                    { elms.map((e, i) => <li
                        className='transition-all text-[14px] font-light cursor-pointer lg:max-w-[250px] text-white md:text-[#a1a1a1] hover:underline overflow-hidden'
                        key={ i }>{ e }
                    </li>) }
                </ul>
            </motion.div>
        </AnimatePresence>
    )
})

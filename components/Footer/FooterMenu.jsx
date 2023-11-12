import React, { memo } from 'react'
import Image from 'next/image'

export default memo(function FooterMenu({ open, elm, ind, fn }) {
    return (
        <ul className={ `transition-all ease-linear flex flex-col gap-[5px] md:border-b-[2px] border-[#525252] overflow-hidden${ open ? " md:pb-[10px]" : " md:gap-[0px]" }` }>
            { elm.map((e, i) => <li
                className={ `transition-all rounded-md duration-[0.2s] ease-linear text-[14px] font-light cursor-pointer lg:max-w-[250px] ${ i == 0 ? "text-[#a1a1a1] md:min-w-full min-h-[40px] md:hover:bg-[#ffffff53] cursor-pointer flex items-center justify-between md:text-white md:text-[17px]"
                    : ` text-white md:text-[#a1a1a1] hover:underline overflow-hidden${ open ? ` md:max-h-[40px] md:ml-[10px]` : " md:max-h-[0px]"
                    }` }
                ` }
                onClick={ () => i == 0 ? fn(ind) : null }
                key={ i }>{ e }
                { i == 0 && <Image src="/slideImages/arrow.png" width={ 50 } height={ 50 } alt='' className={ `transition-all w-[30px] h-[30px] hidden md:block${ open ? " rotate-[270deg]" : " rotate-[90deg]" }` } /> }
            </li>) }
        </ul>
    )
})

import React, { useEffect, useState } from 'react'
import FilterByColor from './FilterByColor'
import FilterByBrand from './FilterByBrand'
import FilterByRating from './FilterByRating'
import { useDispatch, useSelector } from "react-redux"
import { clearFilteres } from '@/features/Products.slice'

export default function FilterDetails({ category, fn, children }) {
    const products = useSelector(state => state.products.data).filter(elm => elm.prodCategory === category.slice(0, category.length - 1))
    const [mobile, setMobile] = useState(false)
    const [position, setPosition] = useState(false)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(clearFilteres())
    }, [])

    return <>
        { window.innerWidth < 1001 && <div className='hidden md:grid grid-cols-2 container justify-between p-0 gap-[20px]'>
            <button onClick={ () => setPosition(!position) } className='p-[10px] rounded-md border-[#cacdd8] w-full border-[2px]'>Position</button>
            <button onClick={ () => setMobile(!mobile) } className='px-[10px] py-[5px] rounded-md border-[#cacdd8] border-[2px] w-full'>Filter</button>
            { position ? children : null }
        </div> }
        <div className={ `flex flex-col md:z-[100] md:p-[20px] max-w-[240px] min-w-[240px] gap-[50px] md:min-w-full transition-all md:max-h-[100vh] overflow-auto md:left-0 md:fixed md:bg-white${ mobile && window.innerWidth < 1001
            ? " top-0 " : " md:top-[-100%]" }` }>
            <div></div>
            { window.innerWidth > 999 && children }
            <FilterByColor products={ products } fn={ fn } mobile={ mobile } />
            <FilterByBrand products={ products } fn={ fn } mobile={ mobile } />
            <FilterByRating products={ products } fn={ fn } mobile={ mobile } />
        </div>
    </>
};
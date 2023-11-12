"use client"
import { filterByColor } from '@/features/Products.slice'
import React, { useState, memo, useEffect, useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from "next/navigation"


export default memo(({ products, fn }) => {
    const dispatch = useDispatch()
    const [activeColors, setActiveColors] = useState([])

    const colors = useMemo(() => {
        return products.reduce((arr, elm) => {
            elm.prodColors.forEach(el => !arr.includes(el) ? arr.push(el) : null)
            return arr;
        }, [])
    }, [useParams().category])

    useEffect(() => {
        dispatch(filterByColor(activeColors))
        fn()
    }, [activeColors])

    return (
        <div className='flex flex-col gap-[10px]'>
            <h6 className='text-[25px] text-bold my-[10px]'>Available colors</h6>
            <div className='flex gap-[10px] items-center flex-wrap p-[3px]'>
                { colors.map((elm, ind) => {
                    const style = activeColors.includes(elm)
                        ? { background: elm, transform: "scale(1.2)", boxShadow: "0 0 2px gray" } : { background: elm }
                    return <div key={ ind } style={ style }
                        className={ `w-[30px] h-[30px] cursor-pointer selection:bg-transparent border-[1px] border-gray rounded-md border-[gray]` }
                        onClick={ () => !activeColors.includes(elm)
                            ? setActiveColors([...activeColors, elm])
                            : setActiveColors(activeColors.filter(e => e !== elm)) }
                    >
                    </div>
                }) }
            </div>
        </div>
    )
})
"use client"
import { filterByBrand } from '@/features/Products.slice'
import React, { useState, memo, useEffect, useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from "next/navigation"
import Image from 'next/image'
import Skeleton from 'react-loading-skeleton'


export default memo(({ products, fn }) => {
    const time = Date.now();
    const dispatch = useDispatch()
    const [activeBrands, setActiveBrands] = useState([])
    const [loading, setLoading] = useState(true)

    const brands = useMemo(() => {
        return products.reduce((arr, elm) => {
            !arr.includes(elm.prodBrand) ? arr.push(elm.prodBrand) : null;
            return arr;
        }, [])
    }, [useParams().category])

    useEffect(() => {
        loading ? setTimeout(() => {
            setLoading(false)
        }, Date.now() - time) : null
        dispatch(filterByBrand(activeBrands))
        fn()
    }, [activeBrands])

    return (
        <div className='flex flex-col gap-[10px]'>
            <h6 className='text-[25px] text-bold my-[10px]'>Available brands</h6>
            <div className='grid gap-[20px] grid-cols-2 items-center'>
                { brands.map((elm, ind) => {
                    const style = activeBrands.includes(elm)
                        ? { borderColor: "#7aa9d2" } : null
                    return (
                        <div className='border-[4px] hover:border-[gray] flex flex-col items-center px-[10px] py-[5px] gap-[5px] transition-all rounded-[10px] cursor-pointer text-bold text-[20px] h-full justify-center' key={ ind } style={ style }
                            onClick={ () => !activeBrands.includes(elm)
                                ? setActiveBrands([...activeBrands, elm])
                                : setActiveBrands(activeBrands.filter(e => e !== elm)) }
                        >
                            { !loading ? <Image
                                src={ `/brandsImages/${ elm }-logo.png` }
                                width={ 200 } height={ 150 } alt={ elm }
                                className={ `max-h-[30px] object-contain selection:bg-transparent max-w-[70px]` }
                            /> : <Skeleton height={ 30 } width={100} /> }
                            { !loading ? elm : <Skeleton height={ 20 } width={100} /> }
                        </div>
                    )
                }) }
            </div>
        </div>
    )
})
"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import { useSelector } from 'react-redux'

function AllCategories() {
    const time = Date.now()
    const [loading, setLoading] = useState(true)
    const categories = useSelector(state => state.categories)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, Date.now() - time);
    })

    return (
        <div className='container flex mx-auto my-[60px] justify-center items-center flex-wrap gap-[50px]'>
            { categories.map((elm, ind) => (
                <Link className='rounded-[10px] flex flex-col gap-[20px] items-center justify-center text-[25px] text-bold text-[#252525] border-[4px] border-gray w-[300px] h-[300px] py-[20px] hover:bg-[#b0d2ff] hover:border-[#b0d2ff] transition-all easy-out' key={ ind } href={ "/products/" + elm.toLowerCase() }>
                    { !loading ? <>
                        <Image className='w-[150px] object-contain' src={ "/categoryImages/" + elm.toLowerCase() + ".png" } alt={ elm } width={ 500 } height={ 500 } />
                        { elm }
                    </>
                        : <>
                            <Skeleton width={ 150 } height={ 150 } circle />
                            <Skeleton width={ 80 } height={ 20 } />
                        </>
                    }
                </Link>)) }
        </div>
    )
}; export default AllCategories
"use client"
import { filterByRating } from '@/features/Products.slice'
import React, { useState, memo, useEffect, useCallback, useMemo } from 'react'
import { useDispatch } from 'react-redux'
import Image from 'next/image'


export default memo(({ fn }) => {
    const dispatch = useDispatch()
    const [activeRatings, setActiveRatings] = useState([])

    const ratings = [1, 2, 3, 4, 5]

    useEffect(() => {
        dispatch(filterByRating(activeRatings))
        fn()
    }, [activeRatings])

    return (
        <div className='flex flex-col gap-[10px]'>
            <h6 className='text-[25px] text-bold my-[10px]'>Ratings</h6>
            <div className='grid gap-[20px] grid-cols-2 items-center justify-center'>
                { ratings.map((elm, ind) => {
                    const src = activeRatings.includes(elm)
                        ? "/cardImages/goldStar.png" : "/cardImages/star.png"
                    return (
                        <div className='flex justify-center p-[5px] relative' key={ ind }>
                            <div onClick={ () => !activeRatings.includes(elm)
                                ? setActiveRatings([...activeRatings, elm])
                                : setActiveRatings(activeRatings.filter(e => e !== elm)) } >
                                <span className='absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 text-[20px] text-bold pt-[5px] pr-[1px] cursor-pointer'>{ elm }</span>
                                <Image src={ src } width={ 100 } height={ 100 } alt='Star' className='w-[60px] h-[60px] cursor-pointer' />
                            </div>
                        </div>
                    )
                }) }
            </div>
        </div>
    )
})
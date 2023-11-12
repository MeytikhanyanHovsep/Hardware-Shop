import React from 'react'
import Skeleton from 'react-loading-skeleton'

function SkeletonCard() {
    return <>
        { Array(10).fill().map((_, ind) => (
            <div className='px-[10px] py-[25px] overflow-hidden grid gap-[20px] rounded-md shadow-md shadow-[#dfdfdf]' key={ ind }>
                <Skeleton height={ 200 } className='max-w-full'/>
                <Skeleton height={20} className='max-w-full' />
                <Skeleton height={20} className='max-w-full' />
                <Skeleton height={50} className='mx-auto max-w-full' />
            </div>
        )) }
    </>
}

export default SkeletonCard
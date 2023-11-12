import React from 'react'
import Skeleton from 'react-loading-skeleton'

function SkeletonLineItem() {
    return <>
        { Array(5).fill().map((_, ind) => (
            <div className='p-[10px] overflow-hidden items-center flex gap-[20px] rounded-md shadow-md shadow-[#dfdfdf] h-[210px]' key={ ind }>
                <Skeleton height={ 170 } width={ 170 } />
                <div className='max-w-full w-full grid gap-[10px]'>
                    <Skeleton />
                    <Skeleton height={ 50 } />
                    <Skeleton />
                    <Skeleton />
                </div>
                <div className='max-w-[150px] min-w-[150px] grid gap-[10px] '>
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton height={ 50 } />
                </div>
            </div>
        )) }
    </>
} export default SkeletonLineItem
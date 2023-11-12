"use client"
import FilterDetails from '@/components/FilterDetails';
import ProdCardItem from '@/components/ProdDetails/ProdCardItem'
import React, { useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'next/navigation';
import Image from 'next/image';
import posCardImage from "@/public/cardImages/pos-card-icon.png"
import poslineImage from "@/public/cardImages/pos-line-icon.png"
import ProdLineItem from '@/components/ProdDetails/ProdLineItem';
import SkeletonCardItem from '@/components/ProdDetails/SkeletonCardItem';
import SkeletonLineItem from '@/components/ProdDetails/SkeletonLineItem';

function CategoryProducts() {
    const time = Date.now()
    const [loading, setLoading] = useState(true)
    const category = useParams().category;
    const [filtered, setFiltered] = useState(true)
    const products = useCallback(useSelector(state => state.products.filteredData).filter(e => e.prodCategory === category.slice(0, category.length - 1)), [category, filtered])
    const [prodsPos, setProdsPos] = useState(true)
    const filter = () => { setFiltered(!filtered) }
    const style = prodsPos ? { gridTemplateColumns: `repeat(auto-fit, minmax(210px, 1fr)` } : null

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, Date.now() - time)
    }, [prodsPos])


    return <>
        <section className='flex w-full md:flex-col container max-h-min mx-auto my-[50px] gap-[50px]'>
            <FilterDetails category={ category } fn={ filter } >
                <div className='flex gap-[10px] md:min-w-full md:mx-auto'>
                    <Image src={ posCardImage } alt='.' width={ 50 } height={ 50 } className={ `object-cover rounded-md cursor-pointer w-[50px]${ prodsPos ? " border-[#000] border-[2px]" : "" }` } onClick={ () => {
                        if (!prodsPos) {
                            setLoading(true)
                            setProdsPos(true)
                        }
                    } } />
                    <Image src={ poslineImage } alt='.' width={ 50 } height={ 50 } className={ `object-cover rounded-md cursor-pointer w-[50px]${ !prodsPos ? " border-[#000] border-[2px]" : "" }` } onClick={ () => {
                        if (prodsPos) {
                            setLoading(true)
                            setProdsPos(false)
                        }
                    } } />
                </div>
            </FilterDetails>
            <div style={ style } className={ `w-full ${ prodsPos
                ? "grid gap-y-[30px] gap-x-[15px] xs:justify-center xl:gap-[50px] md:gap-[10px]" : "flex flex-col gap-[10px]" }` }>
                { !loading ? products.map(e =>
                    prodsPos ? <ProdCardItem key={ e.prodId } product={ ...e } />
                        : <ProdLineItem key={ e.prodId } product={ ...e } />
                ) : (prodsPos ? <SkeletonCardItem /> : <SkeletonLineItem />) }
            </div>
        </section>
    </>
}; export default CategoryProducts
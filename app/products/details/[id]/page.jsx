"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '@/features/Cart.slice';
import { clearFilteres } from '@/features/Products.slice';

function ProductDetails(props) {
    const product = useSelector(state => state.products.data.find(e => e.prodId === +props.params.id))
    const stars = Array(5).fill(0).fill(1, 0, props.prodRating);
    const { prodWindow, prodMemory, prodRAM } = product.prodDetails;
    const [color, setColor] = useState(product.prodColors[0]);
    const dispatch = useDispatch()

    const handleSubmit = e => {
        e.preventDefault();
    }

    useEffect(() => { dispatch(clearFilteres()) }, [])

    return (
        <section className='w-full mt-[50px] flex flex-col gap-[50px] xs:gap-[30px]'>
            <h5 className='text-bold text-[40px] container mx-auto xs:text-[30px]'>About Product</h5>
            <div className='flex container mx-auto gap-[50px] items-center justify-between sm:flex-col xs:flex-col sm:items mb-[30px]'>
                <form className='flex flex-col justify-start gap-[20px]' onSubmit={ handleSubmit }>
                    <h3 className='text-[30px] xs:text-[25px]'>{ product.prodName }</h3>
                    <p className='text-[20px] font-[300] text-[#4c4c4c]'>{ product.prodComment }</p>
                    <div className='flex gap-[40px]'>
                        <span className='text-[23px]'>ID: { product.prodId }</span>
                        <div className='flex z-10 gap-[4px]'>
                            { stars.map((e, i) =>
                                <Image key={ i } alt='Star' src={ `/cardImages/${ +e > 0 ? "goldStar" : "star" }.png` } width={ 500 } height={ 500 }
                                    className='w-[25px] h-[25px] object-cover' />
                            ) }
                        </div>
                    </div>
                    <div className='flex w-full justify-between border-t-[3px] gap-[20px] pt-[20px] border-[#8080806f]'>
                        <div className='flex flex-col gap-[15px] text-[17px]'>
                            <p>RAM</p>
                            <p>Memory</p>
                            <p>Window size</p>
                            <p>Available Colors</p>
                        </div>
                        <div className='flex flex-col gap-[15px] text-[17px]'>
                            <p>{ prodRAM }</p>
                            <p>{ prodMemory }</p>
                            <p>{ prodWindow }</p>
                            <div className='flex gap-[5px]'>
                                { product.prodColors.map((e, i) => {
                                    return <span key={ i } style={ { background: e } } className='w-[25px] h-[25px] rounded-[7px] border-[1px] border-[gray]'></span>
                                }) }
                            </div>
                        </div>
                    </div>
                    <button className='group flex max-w-max rounded-[10px] gap-[10px] border-[2px] border-[#0156ff] px-[30px] pr-[40px] py-[15px] font-bold text-[18px] text-[#fff] bg-[#0156ff] transition-all ease-in sm:py-[5px] sm:px-[15px] sm:pr-[20px] xs:py-[5px] xs:min-w-full xs:mx-auto xs:mt-[20px] justify-center'
                        onClick={ () => dispatch(addToCart({ id: +props.params.id })) }>
                        <Image src="/cardImages/whiteCart.png" className='w-[0px] transition-all ease-in h-[20px] group-hover:w-[30px] group-hover:h-[26px]' width={ 200 } height={ 200 } alt='cart' />
                        <span className='min-w-max'>Add to Cart</span>
                    </button>
                </form>
                <Image src={ product.prodImg } width={ 1000 } height={ 1000 } className='object-contain xs:max-w-[300px] sm:max-w-[350px] max-w-[400px] m-0 sm:mx-auto xs:mx-auto' alt='Product' />
            </div>
        </section>
    )
}

export default ProductDetails
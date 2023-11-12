"use client"
import Image from 'next/image'
import Link from 'next/link';
import { addToCart } from "@/features/Cart.slice"
import { useDispatch } from 'react-redux';
import Skeleton from 'react-loading-skeleton';

export default function ProdCardItem({ product }) {
    let stars = Array(5).fill(0).fill(1, 0, product.prodRating);
    const dispatch = useDispatch()

    return (
        <div className="product-item flex max-h-[430px] flex-col shadow-sm rounded-[10px] shadow-gray-400 pt-[10px] max-w-[300px] xs:pt-0 pb-[15px] border-t-[1px] border-gray-150">
            <Link href={ "/products/details/" + product.prodId } className='px-[20px] xs:px-[10px]'>
                <Image src={ product.prodImg } priority alt="product image" width={ 1000 } height={ 1000 } className="z-0 cursor-pointer object-contain h-[200px]" />
            </Link>
            <div className='px-[25px] xs:px-[10px] xs:pt-[20px] py-[15px] gap-[5px] flex flex-col justify-between sm:pt-0'>
                <div className='flex z-10 gap-[4px] xs:mx-auto'>
                    { stars.map((e, i) => +e == 1
                        ? <Image key={ i } alt='Star' src="/cardImages/goldStar.png" width={ 500 } height={ 500 }
                            className='w-[20px] h-[20px] object-cover' />
                        : <Image key={ i } alt='Star' src="/cardImages/star.png" width={ 500 } height={ 500 }
                            className='w-[20px] h-[20px] object-cover' />) }
                </div>
                <h3 className='text-[16px] h-[50px] flex items-center xs:mx-auto'>{ product.prodName.length <= 35 ? product.prodName : product.prodName.slice(0, 33) + "..." }</h3>
                <p className='font-bold text-[18px] xs:mx-auto'>${ product.prodPrice || <Skeleton /> }</p>
                <button onClick={ () => dispatch(addToCart({ id: +product.prodId, colors: [...product.prodColors] })) } className='group flex mx-auto rounded-[50px] gap-[10px] border-[2px] border-[#0156ff] px-[20px] py-[8px] mt-[10px] font-bold text-[#0156ff] hover:bg-[#0156ff] hover:text-[#fff] transition-all ease-in'>
                    <Image src="/cardImages/blueCart.png" className='w-[20px] transition-all ease-in h-[20px] group-hover:w-0 mt-[2px]' width={ 200 } height={ 200 } alt='cart' />
                    <span className='min-w-max'>Add to Cart</span>
                    <Image src="/cardImages/whiteCart.png" className='w-0 transition-all ease-in h-[20px] group-hover:w-[20px] mt-[2px]' width={ 200 } height={ 200 } alt='cart' />
                </button>
            </div>
        </div>
    )
}
"use client"
import Image from 'next/image'
import Link from 'next/link';
import { addToCart } from "@/features/Cart.slice"
import { useDispatch } from 'react-redux';

function ProdLineItem({ product }) {
    let stars = Array(5).fill(0).fill(1, 0, product.prodRating);
    const dispatch = useDispatch()
    return (
        <div className="product-item flex w-full shadow-sm rounded-[10px] shadow-gray-400 py-[5px] px-[10px] xs:pt-0 border-t-[1px] border-gray-150 max-h-[300px]">
            <Link href={ "/products/details/" + product.prodId } className='px-[20px] xs:px-[10px]'>
                <Image src={ product.prodImg } alt="product image" width={ 1000 } height={ 1000 } className="w-[200px] z-0 cursor-pointer object-contain h-[200px]" />
            </Link>
            <div className='px-[25px] xs:px-[10px] xs:pt-[20px] gap-[5px] flex flex-col justify-evenly sm:pt-0'>
                <h3 className='text-[16px] flex items-center xs:mx-auto'>{ product.prodName }</h3>
                <p className='text-[20px] text-[#4b4b4b]'>{ product.prodComment }</p>
                <div className='flex gap-[5px] justify-between'>
                    <p className='font-bold text-[18px]'>${ product.prodPrice }</p>
                    <div className='flex z-10 gap-[4px]'>
                        { stars.map((e, i) => +e == 1
                            ? <Image key={ i } alt='Star' src="/cardImages/goldStar.png" width={ 500 } height={ 500 }
                                className='w-[20px] h-[20px] object-cover z-0' />
                            : <Image key={ i } alt='Star' src="/cardImages/star.png" width={ 500 } height={ 500 }
                                className='w-[20px] h-[20px] object-cover z-0' />) }
                    </div>
                    <div className='flex gap-[5px]'>
                        { product.prodColors.map((e, i) =>
                            <span key={ i } style={ { background: e } } className='w-[25px] h-[25px] rounded-[7px] border-[1px] border-[gray]'></span>
                        ) }
                    </div>
                </div>
            </div>
            <div className='flex justify-evenly flex-col min-w-max'>
                { Object.entries(product.prodDetails).map((elm, ind) => {
                    return <div key={ ind }>
                        <p>{ elm[0].slice(4, elm[0].length) } - { elm[1] }</p>
                    </div>
                }) }
                <button onClick={ () => dispatch(addToCart({ id: +product.prodId, colors: [...product.prodColors] })) } className='rounded-[50px] gap-[10px] border-[2px] border-[#0156ff] px-[15px] py-[8px] mt-[10px] font-bold text-[#0156ff] hover:bg-[#0156ff] hover:text-[#fff] transition-all ease-in max-w-[150px] w-[150px]'>Add to Cart</button>
            </div>
        </div>
    )
}; export default ProdLineItem
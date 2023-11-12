"use client";
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

import Slide1 from "@/public/slideImages/slide-1.jpg";
import Slide2 from "@/public/slideImages/slide-2.png";
import Slide3 from "@/public/slideImages/slide-3.jpg";
import Slide4 from "@/public/slideImages/slide-4.jpg";
import Slide5 from "@/public/slideImages/slide-5.jpg";

import Arrow from "@/public/slideImages/arrow.png";

function Slider() {
    const images = [Slide1, Slide2, Slide3, Slide4, Slide5]
    const [slideIndex, setSlideIndex] = useState(0);
    const timeoutRef = useRef(null);

    const resetTimeout = () => {
        if (timeoutRef.current)
            clearTimeout(timeoutRef.current);
    };
    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(() =>
            setSlideIndex((prevIndex) => prevIndex === images.length - 1 ? 0 : prevIndex + 1),
            3000
        );

        return () => {
            resetTimeout();
        };
    }, [slideIndex]);

    return (
        <div className='w-full'>
            <div className='mx-auto container relative xs:min-w-full sm:min-w-full bg-black'>
                <button onClick={ () => setSlideIndex(() => slideIndex === 0 ? images.length - 1 : slideIndex - 1) }
                    className="bg-[#61616170] rounded-r-[30px] backdrop-blur w-[70px] h-[70px] absolute top-[115px] left-0 flex items-center justify-center">
                    <Image src={ Arrow } className='w-[30px] h-[30px] object-cover rotate-180' alt='arrow' />
                </button>
                <Image src={ images[slideIndex] } priority className='h-[300px] object-cover' alt={ `sliderImage${ slideIndex + 1 }` } width={ 2000 } height={ 500 } />
                <button onClick={ () => setSlideIndex(() => slideIndex === images.length - 1 ? 0 : slideIndex + 1) }
                    className="bg-[#61616170] rounded-l-[30px] backdrop-blur w-[70px] h-[70px] absolute top-[115px] right-0 flex items-center justify-center">
                    <Image src={ Arrow } width={ 50 } height={ 50 } className='w-[30px] h-[30px] object-cover' alt='arrow' />
                </button>
            </div>
        </div>
    )
}

export default Slider
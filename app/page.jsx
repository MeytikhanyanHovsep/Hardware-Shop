"use client";
import React from 'react'
import Slider from '@/components/Slider'

function Home() {
    return <>
        { window.innerWidth >= 500 ? <Slider /> : null }
    </>
}

export default Home
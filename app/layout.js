"use client"
import './globals.css'
import 'react-loading-skeleton/dist/skeleton.css'
import Component from '@/components'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Online Shop',
    description: 'Online App',
}

export default function RootLayout({ children }) {
    return <>
        <html lang="en" className='bg-[#fff]'>
            <body className={ `${ inter.className } flex flex-col items-center min-h-screen` } >
                <Component children={children} />
            </body>
        </html>
    </>
}

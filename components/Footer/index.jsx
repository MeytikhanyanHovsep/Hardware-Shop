import Image from 'next/image'
import React, { memo, useState } from 'react'
import FooterMenu from './FooterMenu';

export default memo(function FooterDetails() {
    const footerMenus = [
        ["Information", "About Us", "About Zip", "Privacy Policy", "Search", "Terms", "Orders and Returns", "Contact Us", "Advanced Search", "Newsletter Subscription"],
        ["PC Parts", "CPUS", "Add On Cards", "Hard Drives (Internal)", "Graphic Cards", "Keyboards / Mice", "Cases / Power Supplies / Cooling", "RAM (Memory)", "Software", "Speakers / Headsets", "Motherboards"],
        ["Desktop PCs", "Custom PCs", "Servers", "MSI All-In-One PCs", "HP/Compaq PCs", "ASUS PCs", "Tecs PCs"],
        ["Laptops", "Evryday Use Notebooks", "MSI Workstation Series", "MSI Prestige Series", "Tablets and Pads", "Netbooks", "Infinity Gaming Notebooks"],
        ["Address", "Address: 1234 Street Adress City Address, 1234", "Phones: (00) 1234 5678", "We are open: Monday - Thursday: 9:00 AM - 5: 30 PM", "Friday: 9:00 AM - 6:00 PM", "Saturday: 11:00 AM - 5:00 PM", "E - mail: shop@email.com"]
    ];
    const cards = ["paypal", "visa", "maestro", 'discover', "american-express"]
    const [openMenu, setOpenMenu] = useState();

    const addOrRemoveMenu = (ind) => setOpenMenu(openMenu == ind ? null : ind)

    return <>
        <footer className='bg-[#000] py-[30px] w-full mt-[50px]'>
            <div className='container mx-auto flex flex-col gap-[45px]'>
                <div className='flex w-full flex-wrap justify-between items-center xs:gap-[20px]'>
                    <div className='xs:w-full xs:text-center'>
                        <h6 className='text-[#fff] text-[38px] lg:text-[20px] font-bold'>Sign Up To Our NewSletter.</h6>
                        <p className='text-[#fff] text-[16px] lg:text-[14px] md:text-[12px] font-light'>Be the first to hear about the latest offers</p>
                    </div>
                    <form className='flex justify-center xs:w-full gap-[25px] md:gap-[10px]'>
                        <input type='email'
                            className='border-[2px] border-white rounded-[7px] px-[7px] py-[15px] xs:py-[8px] w-full text-[#fff] text-[15px] placeholder:text-white bg-transparent max-w-[300px] md:max-w-[200px] xs:min-w-[63%]' placeholder='Your Email' />
                        <button type='button'
                            className='text-[15px] border-[2px] border-[#0156ff] transition-all ease-linear hover:text-[#0156ff] hover:bg-transparent cursor-pointer text-white px-[25px] bg-[#0156ff] rounded-[30px] py-[15px] xs:py-[8px] xs:px-0 xs:min-w-[35%]' >Subscribe</button>
                    </form>
                </div>
                <div className='flex flex-wrap justify-between gap-[15px] md:flex-col md:gap-[5px]'>
                    { footerMenus.map((elm, ind) => {
                        return <FooterMenu key={ ind } elms={ elm } ind={ ind } open={ openMenu == ind } fn={ addOrRemoveMenu } />
                    }) }
                </div>
                <div className='flex justify-between items-center flex-wrap gap-[10px] xs:gap-y-[20px]'>
                    <div className='flex gap-[15px]'>
                        <Image src="/footerImages/facebook-logo.png" alt='Facebook' className='w-[30px] xs:w-[20px] cursor-pointer transition-transform hover:scale-[1.1] object-contain' width={ 100 } height={ 100 } />
                        <Image src="/footerImages/instagram-logo.png" alt='Instagram' className='w-[30px] xs:w-[20px] cursor-pointer transition-transform hover:scale-[1.1] object-contain' width={ 100 } height={ 100 } />
                    </div>
                    <div className='flex gap-[10px] xs:order-4 xs:w-full justify-center'>
                        { cards.map((elm, ind) => <Image src={ `/footerImages/${ elm }-logo.png` } className='object-contain w-[50px] xs:w-[40px]' key={ ind } alt={ elm } width={ 100 } height={ 100 } />) }
                    </div>
                    <p className='text-[14px] xs:text-[13px] text-[#a1a1a1]'>Copyright © 2020 Shop Pty. Ltd.</p>
                </div>
            </div>
        </footer>
    </>
})
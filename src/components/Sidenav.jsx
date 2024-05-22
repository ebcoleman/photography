import { useState } from 'react'
import {AiOutlineMenu, AiOutlineHome} from 'react-icons/ai'
import { BsPersonRaisedHand } from "react-icons/bs";
import { GrContact } from "react-icons/gr";
import { BiSolidPhotoAlbum } from "react-icons/bi";

const Sidenav = () => {

        const [nav, setNav] = useState(false);
        const handleNav = () => {
            setNav(!nav);
        }
    return (
        <div>
            <AiOutlineMenu onClick={handleNav} className='absolute top-4 right-4 z-[99] md:hidden' />
            {
                nav ? (
                    // Nav menu, small screens
                    <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'>
                        <a  onClick={handleNav}
                            href="#main" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
                            >
                            <AiOutlineHome size={20} />
                            <span className='pl-4'>Home</span>
                        </a>
                        <a onClick={handleNav}
                            href="#about" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
                        >
                            <BsPersonRaisedHand size={20} />
                            <span className='pl-4'>About Me</span>
                        </a>
                        <a onClick={handleNav}
                            href="#portfolio" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
                        >
                            <BiSolidPhotoAlbum size={20} />
                            <span className='pl-4'>Portfolio</span>
                        </a>
                        <a onClick={handleNav}
                            href="#contact" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
                        >
                            <GrContact size={20} />
                            <span className='pl-4'>Contact</span>
                        </a>
                    </div>
                )
                : (
                    ''
                )}
                {/* Side Nav buttons, full screen */}
                    <div className='md:block hidden fixed top-[30%] z-10'>
                        <div className='flex flex-col'>
                            <a href="#main" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <AiOutlineHome size={20} />
                            </a>
                            <a href="#about" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <BsPersonRaisedHand size={20} />
                            </a>
                            <a href="#portfolio" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <BiSolidPhotoAlbum size={20} />
                            </a>
                            <a href="#contact" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <GrContact size={20} />
                            </a>
                        </div>
                    </div>
                    


        </div>
    )
}

export default Sidenav
/* eslint-disable react/no-unescaped-entities */


import { FaFacebook, FaInstagram } from 'react-icons/fa';

const Main = () => {
    return (
        <div id="main">
            <img className="w-full h-screen object-cover object-center scale-x-[-1]" src="/images/indy5.jpg" alt="Indy Fitzgerald Photography" />
            <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
                <div className="max-w-[700px] w-full p-4 flex flex-col justify-start items-center lg:items-start mt-5 lg:mt-5">
                    <h1 className="font-amatic-sc-regular text-center sm:text-5xl text-4xl font-bold text-[#483C32]">
                        Indy Fitzgerald Photography, LLC
                    </h1>
                    <h2 className="font-amatic-sc-regular flex sm:text-2xl text-2xl pt-4 font-bold text-[#483C32]">
                        Rochester Hills, Michigan
                    </h2>
                    <div className="flex justify-center lg:justify-start pt-3 max-w-[200px] w-full space-x-6">
                        <a href="https://www.facebook.com/IFitzgerald.Photography" target="_blank" rel="noopener noreferrer">
                            <FaFacebook className="cursor-pointer" size={20} />
                        </a>
                        <a href="https://www.instagram.com/indyfitzgeraldphotography/" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="cursor-pointer" size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;

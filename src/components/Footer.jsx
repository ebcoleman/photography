import { IoLogoGithub } from "react-icons/io";
import {  FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-[#483C32] text-white py-4 text-center">
            <p>Thanks for stopping by!</p>

            <div className="flex justify-center pt-2 w-full">
                Created by Emily Coleman
            </div>

            <div className="flex justify-center pt-2 w-full">
                    <a href="https://www.linkedin.com/in/emily-coleman-245893228/" target="_blank" rel="noopener noreferrer">   
                    <FaLinkedin className="cursor-pointer mx-2" size={30} />
                    </a>

                    <a href="https://github.com/ebcoleman" target="_blank" rel="noopener noreferrer">
                    <IoLogoGithub className="cursor-pointer mx-2" size={30}/>
                    </a>
             </div>

        </footer>
    );
}

export default Footer;

// const Contact = () => {
//     return (
//         <div id="contact" className="contact my-12 mx-auto">
//             <h2 className="font-amatic-sc-regular text-center text-4xl leading-8 mb-12 font-bold text-[#483C32]">
//                 Contact Me!
//             </h2>

//             <a href="tel:555-555-5555">555-555-5555</a>
//             <a href="tel:555-555-5555"> Call or text me! </a>

//         </div>
//     )
// }

// export default Contact

import { FaPhoneAlt, FaFacebook } from 'react-icons/fa';

const Contact = () => {
    return (
        <div id="contact" className="contact my-12 mx-auto max-w-screen-md p-6 bg-white shadow-gray-400 shadow-lg rounded-lg">
            <h2 className="font-amatic-sc-regular text-center text-4xl leading-8 mb-8 font-bold text-[#483C32]">
                Contact Me!
            </h2>
            <div className="flex flex-col items-center space-y-4">
                <p className="text-lg font-semibold text-gray-800">555-555-5555</p>
                <a
                    href="tel:555-555-5555"
                    className="flex items-center justify-center w-full max-w-xs px-4 py-2 text-lg font-semibold text-white bg-green-500 rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-opacity-75"
                >
                    <FaPhoneAlt className="mr-2" />
                    Call or text me!
                </a>
                <a
                    href="https://www.facebook.com/IFitzgerald.Photography"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full max-w-xs px-4 py-2 text-lg font-semibold text-white bg-blue-700 rounded-lg shadow-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                >
                    <FaFacebook className="mr-2" />
                    Visit my Facebook Page
                </a>
            </div>
        </div>
    );
};

export default Contact;


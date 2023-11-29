import { useEffect, useRef, useState } from "react";

import FooterBg from "./footerbg";
import '../css/FooterBg.module.scss'
import { FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa'; // Import Font Awesome icons from React Icons


const Footer = () => {
    
    return (
        <footer
            className="w-full relative select-none bg-cover">
            <FooterBg />
            
                <div className="section-container w-full h-full pt-32">
                    <div className="section-container flex flex-col h-full justify-end z-10 items-center py-12">
                        <h1 className="font-medium text-3xl md:text-4xl text-center seq">
                            Feel free to connect on social media.
                        </h1>
                        <div className="text-center seq">
                        <div className="icon text-lg flex gap-4  lg:gap-8 lg:my-10">
                        <a href="https://twitter.com/dhruvthakkar104" target="_blank">
                            <FaTwitter size={50} className="mx-4" />
                        </a>

                        <a href="https://www.instagram.com/dhruv_100404/" target="_blank">
                            <FaInstagram size={50} className="mx-4" />
                        </a>
                        <a href="https://github.com/Dhruv100404" target="_blank">
                            <FaGithub size={50} className="mx-4" />
                        </a>
                    </div>
                    <br/>
                    <div className="footer_copyright">
        <p>&copy;Dhruv Thakkar All rights reserved</p>
                </div>

                        </div>
                        
                    </div>
                    
                </div>
                
        </footer>
    );
};

export default Footer;

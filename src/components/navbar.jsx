import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "../css/styles.css";

function Navbar() {
    return (
        <>
            <div className="black-block fixed top-0 left-0 w-full h-18 bg-black z-40"></div>
            <div className="navbarcon flex justify-between items-center px-20 py-6 bg-transparent z-40 text-white lg:px-6 fixed w-full">
            <h1 className="text-4xl  font-bold ">DKT</h1>
                <nav className="flex justify-center items-center gap-x-10 lg:hidden lg:fixed lg:top-0 lg:left-0 lg:w-full lg:bg-[#171717] lg:h-[450px] lg:items-start lg:pl-6 cursor-pointer lg:pt-20">
                    <ul className="flex gap-10 text-3xl mr-4 lg:flex-col lg:gap-6">
                        <li className="bla">
                            <AnchorLink href="#home">Home</AnchorLink>
                        </li>
                        <li className="bla">
                            <AnchorLink href="#skills">Skills</AnchorLink>
                        </li>
                        <li className="bla">
                            <AnchorLink href="#project">Projects</AnchorLink>
                        </li>      
                        <li className="bla">
                            <AnchorLink href="#contact">Contact</AnchorLink>
                        </li>
                    </ul>
                </nav>
                <i className="fa-solid fa-bars hidden lg:block text-2xl cursor-pointer"></i>
            </div>
        </>
    );
}

export default Navbar;

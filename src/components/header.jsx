import React, { useState, useEffect } from 'react';
import logo from "../assets/astronout.png"
import logo1 from "../assets/astronout1.png"
import bg from "../assets/bg.jpg"
import Navbar from '../components/navbar'
import "../css/styles.css"
import 'bootstrap/dist/css/bootstrap.min.css';


const Header = () => {
    return (
        <>
            <div id='home' style={{ backgroundImage: `url(${bg})` ,height: '100vh', backgroundSize: 'cover', backgroundPosition: 'center'  }}>
                <Navbar />
                <div className="wrapper flex justify-between items-center h-screen w-full px-20 lg:justify-center lg:px-6">
                    <div className="content lg:text-center">
                        <div className="btn py-3">
                            <button className=' border-2 border-[#b0aaaa] font-bold text-white bg-[linear-gradient(90deg,#b004b0,#38097a)] p-4 rounded-2xl'>Welcome to my Portfolio</button>
                        </div>
                        <h1 className='text-white text-5xl font-bold'>Hi! I'm Dhruv</h1>
                        <p className='text-white py-4 max-w-lg '>Passionate about uncovering insights hidden within data and crafting impactful 
                        stories through analysis. Equally driven to build dynamic, user-centric web experiences that merge creativity with 
                        functionality</p>
                        
                    </div>
                    <div className="image banner-astronout lg:hidden absolute w-[300px] flex ">
                        <img className='w-96 ast-img' src={logo1} alt="" />

                    </div>
                    <div className="image banner-astronout1 lg:hidden absolute w-[300px] flex ">

                        <img className='w-96 ast-img' src={logo} alt="" />
                    </div>

                </div>
            </div>
        </>
    );
};

export default Header;

import React from "react";
import {
    FaPython,
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaDatabase,
    FaGit,
    FaNode
} from "react-icons/fa";
import { SiPostman, SiTableau } from "react-icons/si";
import { SiCplusplusbuilder,SiPandas, SiVite } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { TbSql } from "react-icons/tb";

import "swiper/css";
import "swiper/css/navigation";
import "../css/styles.css";

import bg from "../assets/banner-bg.png";

function Skills() {
    return (
        <>
            <div
                id="skills"
                style={{ backgroundImage: `url(${bg})` }}
                className="wrapper h-full bg-no-repeat bg-center bg-cover p-16 lg:p-4"
            >
                <div className="skills-wrapper text-center text-white bg-[#171717] p-10 rounded-[50px] lg:p-8">
                    <h1 className="text-4xl font-bold mb-4">Skills</h1>
                    <p className="text-lg mb-8">
                        Explore my expertise in different areas.
                    </p>
                    <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
                        {/* Languages */}
                        <div className="text-center">
                            <h2 className="text-2xl font-medium mb-4">Languages</h2>
                            <div className="flex justify-center">
                                <FaPython size={50} className="mx-4" />
                                <FaHtml5 size={50} className="mx-4" />
                                
                                <FaJs size={50} className="mx-4" />
                                <SiCplusplusbuilder size={50} className="mx-4" />
                                <TbSql size={50} className="mx-4" />
                            </div>
                        </div>
                        {/* Libraries */}
                        <div className="text-center">
                            <h2 className="text-2xl font-medium mb-4">Libraries and Frameworks</h2>
                            <div className="flex justify-center">
                                <FaReact size={50} className="mx-4" />
                                <SiPandas size={50} className="mx-4" />
                                <FaNode size={50} className="mx-4" />
                                <SiVite size={50} className="mx-4" />
                                {/* Add more library icons */}
                            </div>
                        </div>
                        {/* Databases */}
                        <div className="text-center">
                            <h2 className="text-2xl font-medium mb-4">Databases</h2>
                            <div className="flex justify-center">
                                <FaDatabase size={50} className="mx-4" />
                                <SiMongodb size={50} className="mx-4" />
                                {/* Add more database icons */}
                            </div>
                        </div>
                        {/* Tools */}
                        <div className="text-center">
                            <h2 className="text-2xl font-medium mb-4">Tools</h2>
                            <div className="flex justify-center">
                                <FaGit size={50} className="mx-4" />
                                <SiTableau size={50} className="mx-4" />
                                <SiPostman size={50} className="mx-4" />
                                {/* Add more tool icons */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Skills;

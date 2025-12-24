import { FaCheckCircle } from "react-icons/fa";
import Lottie from "lottie-react";
import { motion } from "motion/react"
import {FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";

import developerAnimation from "../../public/animation/developerAnimation.json";
import { LuCloudDownload } from "react-icons/lu";

const Hearo = () => {
  return (
    <div className="mt-16 grid grid-cols-3">
        <div className="lg:col-span-2 col-span-3">
            <div className="mb-8 w-[85px] relative min-h-[85px]">
            <motion.img
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        src="image/366553810_2111754125883137_8207657486438928119_n-modified.png"
        alt=""
        className="w-full h-full rounded-full"
        />
        <FaCheckCircle
        className="ml-auto text-blue-500 absolute -right-[10px] -bottom-[3px]"
        size={20}
        />
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">Frontend / Full-Stack <br /> JavaScript Developer</h1>
            <p className="text-gray-400 w-full xl:max-w-[900px] mt-6">Passionate software designer and entrepreneur with a love for exploring new technologies and the universe. Experienced in creating innovative solutions and building projects from concept to launch.</p>
            <div className="flex items-center gap-6 mt-6">
                <ul className="flex items-center gap-5">
                <li>
                    <a target="_blank" href="https://github.com/112003mesa/"><FaGithub className="text-2xl text-gray-400 hover:text-[#fff] transition" /></a>
                </li>
                <li>
                    <a target="_blank" href="https://www.linkedin.com/in/mohamed-khamis-242827353/"><FaLinkedin className="text-2xl text-gray-400 hover:text-[#fff] transition" /></a>
                </li>
                <li>
                    <a target="_blank" href="https://www.facebook.com/mohamed.mesa.10"><FaFacebook className="text-2xl text-gray-400 hover:text-[#fff] transition" /></a>
                </li>
                </ul>
                <button 
                onClick={() => window.open("/Mohamed_Khamis_Frontend_FullStack.pdf")}
                type="button" 
                className="flex items-center justify-between relative overflow-hidden text-gray-100/80 rounded active:scale-95 transition text-sm h-10 w-36 pr-7 truncate hover:bg-[#7e1cff] bg-[#7611fa] duration-300 border border-gray-500/30">
                <div className="bg-gray-100/30 h-6 w-1 -ml-px rounded-r-sm absolute"></div>
                <div className="bg-gray-100/30 h-6 w-1 -mr-px right-0 rounded-l-sm absolute"></div>
                <div className="h-full flex items-center justify-center px-3 text-xl">
                    <LuCloudDownload />
                </div>
                Download CV
            </button>
            </div>
        </div>
        <div className="flex lg:col-span-1 col-span-3 mt-4 lg:mt-0 items-center justify-center">
        <Lottie animationData={developerAnimation} />
        </div>
    </div>
  )
}

export default Hearo

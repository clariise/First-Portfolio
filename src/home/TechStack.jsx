import React from 'react'
import NodeImage from '../assets/node.png'
import JsImage from '../assets/js.png'
import GitImage from '../assets/git.png'
import FirebaseImage from '../assets/firebase.png'
import ReactImage from '../assets/react.png'


function TechStack() {
  return (
    <section className="max-w-[1160px] w-full mx-auto mt-[168px] px-[24px] max-sm:px-0">
    <div data-aos="fade-up" data-aos-duration="1000" 
    className="bg-gradient-to-r flex flex-col lg:flex-row justify-between items-center from-fuchsia-500/[30%] to-indigo-600/[30%] rounded-lg max-sm:rounded-none px-8 lg:gap-0 gap-3 lg:px-[45.5px] py-10">
        <div data-aos="fade-up" data-aos-duration="1000" className=" w-full lg:w-1/2 ">
            <h1 className="text-[56px] text-white sm:text-center lg:text-start font-bold leading-[1] mb-3 ">Tech Stack</h1>
            <p className="text-white sm:text-center lg:text-start leading-[1.8]">
                My tech stack is a strategic blend of advanced tools designed
                to <span className="font-bold">deliver high-quality</span> , <span className="font-bold">scalable</span> ,
                and <span className="font-bold">efficient solutions</span> .
                It’s more than just a collection of technologies; it’s a
                competitive advantage that elevates your web development experience
                to new heights. Harness the power of my tech stack and step into the
                future of web development. 🚀
            </p>
        </div>
        <div data-aos="fade-up" data-aos-duration="1000" className="grid grid-cols-2 sm:grid-cols-3 grid-rows-3 w-full lg:w-[474px] gap-[7px]">
            <div className="col-span-1 py-6 flex justify-center items-center bg-[#222222]/[30%] border border-[#2C2C2C] rounded-lg">
                <img className="w-[50px] h-[50px]" src='https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg' alt="mongodb"/>
            </div>
            <div className="col-span-1 py-6 flex justify-center items-center bg-[#222222]/[30%] border border-[#2C2C2C] rounded-lg">
                <img className="w-[50px] h-[50px]" src='https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg' alt="express"/>
            </div>
            <div className="col-span-1 py-6 flex justify-center items-center bg-[#222222]/[30%] border border-[#2C2C2C] rounded-lg">
                <img className="w-[56px] h-[50px]" src={ReactImage} alt=""/>
            </div>
            <div className="col-span-1 py-6 flex justify-center items-center bg-[#222222]/[30%] border border-[#2C2C2C] rounded-lg">
                <img className="w-[50px] h-[50px]" src={NodeImage} alt="nodejs"/>
            </div>
            <div className="col-span-1 py-6 flex justify-center items-center bg-[#222222]/[30%] border border-[#2C2C2C] rounded-lg">
                <img className="w-[50px] h-[50px]" src={JsImage} alt=""/>
            </div>
            <div className="col-span-1 py-6 flex justify-center items-center bg-[#222222]/[30%] border border-[#2C2C2C] rounded-lg">
                <img className="w-[50px] h-[50px] bg-white rounded-full" src='https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg' alt=""/>
            </div>
            <div className="col-span-1 py-6 flex justify-center items-center bg-[#222222]/[30%] border border-[#2C2C2C] rounded-lg">
                <img className="w-[60px] h-[50px]" src='../src/assets/laravel-svgrepo-com.png' alt="laravel"/>
            </div>
            <div className="col-span-1 py-6 flex justify-center items-center bg-[#222222]/[30%] border border-[#2C2C2C] rounded-lg">
                <img className="w-[50px] h-[50px]" src={FirebaseImage} alt=""/>
            </div>
            <div className="col-span-1 py-6 flex justify-center items-center bg-[#222222]/[30%] border border-[#2C2C2C] rounded-lg">
                <img className="w-[50px] h-[50px]" src={GitImage} alt=""/>
            </div>
        </div>
    </div>
</section>
  )
}

export default TechStack

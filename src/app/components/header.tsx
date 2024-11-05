"use client";
import { useState, useEffect } from "react";
import Link from "next/link"

export default function Header() {
    const [isVisible, setIsVisisble] = useState(false);

    const handleVisiblity = () => {
        setIsVisisble(isVisible => !isVisible);
    }
   
    return(
        <div className="fixed top-0 z-10 items-center flex justify-around font-sans bg-primary w-full h-[5%] lg:h-[8%] lg:text-2xl text-sm md:text-lg lg:justify-between lg:px-8 md:justify-between md:px-6 sm:justify-between sm:px-4 ">
                <Link href={"/"} className="font-serif text-bases font-bold text-3xl border-b-4 border-transparent "><i>MZ</i></Link>
               
                <div className="hidden lg:block">
                <ul className="flex gap-2 lg:gap-5 text-bases">
                <Link href={"#one"} className=" border-b-4 border-transparent hover:border-b-4 hover:border-accent"> <li>Home</li></Link>  
                <Link href={"#two"} className=" border-b-4 border-transparent hover:border-b-4 hover:border-accent"> <li>About</li></Link>
                <Link href={"#three"} className="border-b-4 border-transparent hover:border-b-4 hover:border-accent"> <li>Skills</li></Link>
                <Link href={"#four"} className="border-b-4 border-transparent hover:border-b-4 hover:border-accent"> <li>Services</li></Link>
                <Link href={"#five"} className="border-b-4 border-transparent hover:border-b-4 hover:border-accent"> <li>Projects</li></Link>
                <Link href={"#six"} className="border-b-4 border-transparent hover:border-b-4 hover:border-accent"> <li>Contact</li></Link>
            </ul>
            </div>
              <button className="lg:hidden " onClick={handleVisiblity}>
                {!isVisible ? "" : 
                <div className="relative">
                <ul className="flex flex-col w-[30%] scroll-none items-center justify-center gap-2 lg:gap-5 text-text font-semibold bg-bases shadow-md shadow-primary fixed top-[5.1%] right-[0%] ">
                <Link href={"#one.1"} className=" border-b-4 border-transparent hover:border-b-4 hover:border-accent"> <li>Home</li></Link>  
                <Link href={"#two.1"} className=" border-b-4 border-transparent hover:border-b-4 hover:border-accent"> <li>About</li></Link>
                <Link href={"#three.1"} className="border-b-4 border-transparent hover:border-b-4 hover:border-accent"> <li>Skills</li></Link>
                <Link href={"#four.1"} className="border-b-4 border-transparent hover:border-b-4 hover:border-accent"> <li>Services</li></Link>
                <Link href={"#five.1"} className="border-b-4 border-transparent hover:border-b-4 hover:border-accent"> <li>Projects</li></Link>
                <Link href={"#six.1"} className="border-b-4 border-transparent hover:border-b-4 hover:border-accent"> <li>Contact</li></Link>
            </ul>
            </div>}
              </button>
              <button className="lg:hidden"  onClick={handleVisiblity}>
                {!isVisible ? 
                 <div className="flex flex-col gap-1">
                 <div className="h-[3px] w-[25px] bg-bases"></div>
                 <div className="h-[3px] w-[25px] bg-bases"></div>
                 <div className="h-[3px] w-[25px] bg-bases"></div>
             </div> : 
              <div className="flex flex-col gap-1">
              <div className="h-[3px] w-[25px] bg-bases"></div>
              <div className="h-[3px] w-[25px] bg-bases"></div>
              <div className="h-[3px] w-[25px] bg-bases"></div>
          </div>}
              </button>

            
      
        </div>
    );
}


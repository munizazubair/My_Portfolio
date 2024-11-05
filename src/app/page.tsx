import Header from "../app/components/header";
import About from "./about/page";
import About2 from "./about2/page";
import Services from "./services/page";
import Services2 from "./services2/page";
import Projects2 from "./projects2/page";
import Skills from "./skills/page";
import Skills2 from "./skills2/page";
import Projects from "./projects/page";
import Contacts from "./contact/page";
import Contacts2 from "./contact2/page";
import logo from "@/app/public/my_logo.jpg"
import Link from "next/link"
import Image from "next/image";


export default function Home() {
  return (
    <>
      <Header />

      <section id="one" className="bg-bases h-screen pt-[6%] px-[2%] flex flex-col justify-center items-center text-center">

        <div className="style text-text text-center flex flex-col gap-5 font-bold ">
          <h1 className="text-5xl md:text-6xl 2xl:text-[75px] lg:text-6xl">Hey, I'm <br /> Muniza Zubair </h1>
          <p className="text-accent text-3xl md:text-4xl 2xl:text-5xl lg:text-4xl">Frontend Developer</p>
        </div>


        <div className="text-text font-sans font-semibold text-xl text-center py-7 md:py-12 md:text-2xl lg:py-8 2xl:text-3xl ">
          I create user-friendly, responsive websites <br /> using HTML, CSS and Typescript. I am  <br />  passionate about building clean, <br /> efficient code and solving real-world <br /> problems through technology.
        </div>

        <div className="style gap-3 mt-5 md:mt-2 flex flex-col font-bold ">
          <button className="hidden md:block bg-primary text-bases h-12 w-64 border-b-4 border-l-4 border-accent text-lg rounded-md md:h-14 md:w-72 md:text-xl lg:text-lg  hover:bg-primaryLight "> <Link href={"#two"}> MORE ABOUT ME </Link> </button>
          <button className="hidden md:block bg-primary text-bases h-12 w-64 border-b-4 border-l-4 border-accent text-lg rounded-md md:h-14 md:w-72 md:text-xl lg:text-lg hover:bg-primaryLight "> <Link href={"#five"}> SHOW MY PROJECTS </Link> </button>
          
          <button className="md:hidden block bg-primary text-bases h-12 w-64 border-b-4 border-l-4 border-accent text-lg rounded-md md:h-14 md:w-72 md:text-xl lg:text-lg  hover:bg-primaryLight "> <Link href={"#two.1"}> MORE ABOUT ME </Link> </button>
          <button className="md:hidden block bg-primary text-bases h-12 w-64 border-b-4 border-l-4 border-accent text-lg rounded-md md:h-14 md:w-72 md:text-xl lg:text-lg hover:bg-primaryLight "> <Link href={"#five.1"}> SHOW MY PROJECTS </Link> </button>
        </div>


      </section>


<div className="hidden lg:block" >
      <div className="flex justify-around my-[4%]">   

        <div className="flex flex-col gap-[30px] ml-16">
        <About2 />
        <Services2 />
        </div>

      
        <div className="flex flex-col gap-[30px] mr-16">
        <div className=" rounded-xl w-[100%] shadow-2xl shadow-primary"><Image className=" rounded-xl " src={logo} alt="my logo"></Image></div> 
        <Skills2 /> 
        </div>

         </div>

</div>

<div className="hidden lg:block" >
      <div className="flex flex-col gap-20 items-center my-[4%]">   

<Projects2 />
< Contacts2 />
</div>
</div>

      <div className="lg:hidden">
      <About />
      <Skills />
      <Services />
      <Projects />
      <Contacts />
      </div>
    </ >
  );
}   
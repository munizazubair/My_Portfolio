"use client";
import { useState } from "react";
import Image from "next/image"
import image1 from "@/app/public/project1..image.jpg"
import image2 from "@/app/public/project2.image.jpg"
import image3 from "@/app/public/project3.image.jpg"

import Link from "next/link"
export default function Projects() {
  const [isVisible, setIsVisisble] = useState(true);
  const [isVisible2, setIsVisisble2] = useState(true);
  const [isVisible3, setIsVisisble3] = useState(true);



  const handleClick = () => {
    setIsVisisble(isVisible => !isVisible);
  }
  const handleClick2 = () => {
    setIsVisisble2(isVisible2 => !isVisible2);
  }
  const handleClick3 = () => {
    setIsVisisble3(isVisible3 => !isVisible3);
  }

    return(            
        <div id="five.1" className=" bg-bases pt-12 h-[vh] w-[100%] ">
           <section id="four" className=" flex flex-col items-center ">
           <h1 className="style text-accent text-4xl font-bold text-center h-14 w-48 ">Projects</h1>


           <div className="flex flex-col justify-center items-center gap-10">

        
           <div className="relative border-2 border-text h-[auto] sm:w-[60%] w-[80%] flex flex-col text-start gap-2 text-xl font-bold text-text hover:shadow-md hover:shadow-primary">
           <h1 className="style flex  justify-center gap-2 text-accent">Blog Website</h1>

<div className="flex flex-col items-end "> 
  
  {isVisible ? (<div className="w-[100%]"><Image src={image1} alt="Project 2" /></div> ): ( <div className="flex justify-start"> <div className="font-semibold text-sm px-2 text-textLight">
  <span className="font-bold text-md text-text">Description:</span> A dynamic food delivery website that includes pages for menu, current offers, and a meal readiness tracker.
<br />
<span className="font-bold text-md text-text" >Technologies Used:</span>
<ul className="flex justify-center gap-2 text-md underline">
  <li>Tailwind CSS</li> |
  <li>Next.js</li>
</ul>
<span className="font-bold text-md text-text">Key Features: </span> 
Responsive design with intuitive navigation, high-quality images, and optimized performance for a seamless user experience.<br />
<div className="flex justify-center gap-2 my-3 text-text">
<Link target="_blank" className="font-bold border-2 text-text border-primary hover:bg-primaryLight hover:shadow-md hover:shadow-primary" href={"https://class-5-lx4r7aa2o-munizazubairs-projects.vercel.app"}> View Live Project</Link> <div className="bg-text h-6 w-[2px] "></div> <Link target="_blank" className="font-bold border-2 border-primary hover:bg-primaryLight hover:shadow-md hover:shadow-primary" href={"https://github.com/munizazubair/class-5.git"} >Github Repository </Link>
</div>
</div>
</div> )}
  </div>
 <div className="flex justify-center mt-10">
 <button onClick={handleClick} className="absolute bottom-0 sm:text-lg hover:shadow-lg hover:shadow-primary sm:h-7 sm:w-[55%] h-8 w-[60%] text-sm text-center bg-accent">
  {!isVisible ? "Show Project Image" : "Show Project Details"}
  </button> 
 </div>
 
  </div>








  <div className="relative border-2 border-text h-[auto] sm:w-[60%] w-[80%] flex flex-col text-start gap-2 text-xl font-bold text-text hover:shadow-md hover:shadow-primary">
  <h1 className="style flex  justify-center gap-2 text-accent">Website Of Architect</h1>

<div className="flex flex-col items-end "> 
  
  {isVisible2 ? (<div className="w-[100%]"><Image src={image2} alt="Project 2" /></div> ): ( <div className="flex justify-start"> <div className="font-semibold text-sm px-2 text-textLight">
  <span className="font-bold text-md text-text">Description:</span> An elegant website designed to showcase architectural projects, offering a modern and responsive user experience.
<br />
<span className="font-bold text-md text-text" >Technologies Used:</span>
<ul className="flex justify-center gap-2 text-md underline">
  <li>Figma</li>|
  <li>Tailwind CSS</li> |
  <li>Next.js</li>
</ul>
<span className="font-bold text-md text-text">Key Features: </span> 
Intuitive navigation, high-quality imagery, and optimized performance for seamless viewing across devices.
<br />
<div className="flex justify-center gap-2 my-3 text-text">
<Link target="_blank" className="font-bold border-2 border-primary hover:bg-primaryLight hover:shadow-md hover:shadow-primary" href={"https://architect-website-class-hackathon-r71j-n1cycc6px.vercel.app"}> View Live Project</Link> <div className="bg-text h-6 w-[2px] "></div> <Link target="_blank" className="font-bold border-2 border-primary hover:bg-primaryLight hover:shadow-md hover:shadow-primary" href={"https://github.com/munizazubair/architect-website-class-hackathon.git"} >Github Repository </Link>
</div>
</div>
</div> )}
  </div>
 <div className="flex justify-center mt-10">
 <button onClick={handleClick2} className="absolute bottom-0 sm:text-lg hover:shadow-lg hover:shadow-primary sm:h-7 sm:w-[55%] h-8 w-[60%] text-sm text-center bg-accent">
  {!isVisible2 ? "Show Project Image" : "Show Project Details"}
  </button> 
 </div>
 
  </div>



  <div className="relative border-2 border-text h-[auto] sm:w-[60%] w-[80%] flex flex-col text-start gap-2 text-xl font-bold text-text hover:shadow-md hover:shadow-primary">
  <h1 className="style flex justify-center gap-2 text-accent"> Responsive Photo Gallery </h1>

<div className="flex flex-col "> 
  
  {isVisible3 ? (<div className="w-[100%]"><Image src={image3} alt="Project 3" /></div> ): (<div className="flex justify-start"><div className="font-semibold text-sm px-2 text-textLight">
<span className="font-bold text-md">Description:</span> A beautifully designed photo gallery that adjusts seamlessly across all devices. Featuring a curated collection of stunning images, this gallery enhances user experience.
<br />
<span className="font-bold text-md text-text" >Technologies Used:</span>
<ul className="flex justify-center gap-3 text-md underline">
  <li>HTML</li>|
  <li>CSS</li>
</ul>
<span className="font-bold text-md text-text">Key Features: </span> 
 Responsive design, Interactive hover effects on images, Clean layout using CSS Grid, 
<br />
<div className="flex justify-center gap-2 my-3 text-text">
<Link target="_blank" className="font-bold border-2 border-primary hover:bg-primaryLight hover:shadow-md hover:shadow-primary" href={"https://html-ngyy7qexa-munizazubairs-projects.vercel.app"}> View Live Project</Link> <div className="bg-text h-6 w-[2px] "></div> <Link target="_blank" className="font-bold border-2 border-primary hover:bg-primaryLight hover:shadow-md hover:shadow-primary" href={"https://github.com/munizazubair/HTML_CSS.git"} >Github Repository </Link>
</div>
</div></div>)}
 </div>
 <div className="flex justify-center mt-10">
 <button onClick={handleClick3} className=" absolute bottom-0 sm:text-lg hover:shadow-lg hover:shadow-primary sm:h-7 sm:w-[55%] text-sm h-8 w-[60%] text-center bg-accent">
  {!isVisible3 ? "Show Project Image" : "Show Project Details"}
  </button> 
 </div>
  
  </div>












{/* 

  <div className="border-[5px] border-primary h-40 w-[30%] flex flex-col text-start text-2xl font-bold text-text transition-all hover:h-64 hover:text-3xl">
  <h1 className="style text-bases bg-primary flex justify-center gap-2"> 
  <div className="h-2 w-2 bg-accent rounded-full"></div>
  Responsive UI/UX Design 
  <div className="h-2 w-2 bg-accent rounded-full"></div>
  </h1>
  <p className="text-sm font-thin pt-4 hover:text-md">I build mobile-friendly responsive websites using <b>Tailwind CSS</b> and <b>Next.js</b>, ensuring seamless user experiences across all devices.</p>
  </div>

  <div className="border-[5px] border-primary h-40 w-[30%] flex flex-col text-start text-2xl font-bold text-text transition-all hover:h-64 hover:text-3xl">
  <h1 className="style text-bases bg-primary flex justify-center gap-2"> 
  <div className="h-2 w-2 bg-accent rounded-full"></div>
  Responsive UI/UX Design 
  <div className="h-2 w-2 bg-accent rounded-full"></div>
  </h1>
  <p className="text-sm font-thin pt-4 hover:text-md">I build mobile-friendly responsive websites using <b>Tailwind CSS</b> and <b>Next.js</b>, ensuring seamless user experiences across all devices.</p>
  </div>
 */}

</div>
  </section>
           </div>

       
    )
}
{/* <div className="flex flex-col items-center gap-5 mt-3">
<div className="border-[5px] rounded-xl border-primary h-48 w-[70%] flex flex-col justify-center items-center text-2xl font-bold text-text text-center p-5 transition-all hover:h-64 hover:text-3xl"><h1 className="style text-accent">Responsive UI/UX Design </h1>
  <p className="text-sm font-thin pt-4 hover:text-md">I build mobile-friendly responsive websites using <b>Tailwind CSS</b> and <b>Next.js</b>, ensuring seamless user experiences across all devices.</p>
  </div> */}
  {/* 
  <div className="border-[5px] rounded-xl border-primary h-48 w-[70%] flex flex-col justify-center items-center text-2xl font-bold text-text text-center p-5 transition-all hover:h-64 hover:text-3xl"><h1 className="style text-accent">Single Page Application(SPA) Development </h1>
  <p className="text-sm font-thin pt-4 hover:text-md"> I create dynamic, fast-loading SPAs with Next.js, optimizing for a smooth user experience through server-side rendering and static site generation.
  </p></div>
 
  */}
  {/* <div className="border-[5px] rounded-xl border-primary h-56 w-80 flex flex-col justify-center items-center text-2xl font-bold text-text text-center p-5 transition-all hover:h-64 hover:text-3xl"><h1 className="style text-accent">Custom Web Development </h1>
  <p className="text-sm font-thin pt-4 hover:text-md"> I develop modular, reusable UI components using Next.js and Tailwind CSS, enabling faster development and consistent designs across the project.
  </p></div>
  */}

 
  {/* <div className="border-[5px] rounded-xl border-primary h-56 w-80 flex flex-col justify-center items-center text-2xl font-bold text-text text-center p-5 transition-all hover:h-64 hover:text-3xl  hover:bg-neutral-300"><h1 className="style text-accent">Cross Browser Compatibility </h1>
  <p className="text-sm font-thin pt-4 hover:text-md"> I design and build professional landing pages optimized for SEO and conversions, with responsive, pixel-perfect designs using Tailwind CSS.
  </p></div> */}

{/*   
  <div className="border-[5px] rounded-xl border-primary h-56 w-80 flex flex-col justify-center items-center text-2xl font-bold text-text text-center p-5 transition-all hover:h-64 hover:text-3xl"><h1 className="style text-accent">API Integration </h1>
  <p className="text-sm font-thin pt-4 hover:text-md">I create feature-rich e-commerce websites with product listings, shopping carts, and payment integration, focusing on performance and user experience.
  </p></div> */}

  {/* <div className="border-[5px] rounded-xl border-primary h-56 w-80 flex flex-col justify-center items-center text-2xl font-bold text-text text-center p-5 transition-all hover:h-64 hover:text-3xl"><h1 className="style text-accent">Interactive Forms & Dashboard Creation </h1>
  <p className="text-sm font-thin pt-4 hover:text-md">I develop user-friendly forms and dashboards with Tailwind CSS, integrating backend APIs with Next.js for seamless data handling and interaction.
  </p></div>
 

  <div className="border-[5px] rounded-xl border-primary h-56 w-80 flex flex-col justify-center items-center text-2xl font-bold text-text text-center p-5 transition-all hover:h-64 hover:text-3xl"><h1 className="style text-accent">SEO-Friendly Website Development </h1>
  <p className="text-sm font-thin pt-4 hover:text-md">I build websites with Next.js’s built-in SEO tools, implementing best practices to improve visibility on search engines and drive organic traffic.
      </p></div> */}


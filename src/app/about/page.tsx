import Link from "next/link";
import Image from "next/image";
import logo from "@/app/public/my_logo.jpg"
export default function About() {
    return(
       <div>
         <section id="two.1" className="h-vh sm:px-16 sm:py-10 bg-bases flex flex-col justify-center items-center ">
            <div className="flex gap-[7%] sm:gap-32 md:gap-48 mb-5 justify-center">
             <h1 className="style text-accent rounded-md text-4xl font-sans font-bold text-center mb-5 ">About Me</h1>
               <div className="w-[35%] rounded-xl shadow-md shadow-primary"> <Image src={logo} alt="my logo"></Image>
               </div>
               </div>

<div className="text-text h-62 w-74 flex flex-col gap-5 text-start font-semibold font-sans text-md px-10">
  <p>I am a <b><i>frontend developer</i></b> specializing in <b><i>Next.js</i></b>, with a strong passion for <b><i>UI/UX design</i></b>. Over the past 1.5 years, I have immersed myself in web development, honing my skills to create user-friendly experiences.
 </p> 

  <p>I enjoy exploring the latest<b><i> design trends</i></b>  and <b><i>development techniques</i></b> to ensure my work is modern and effective. I believe that a great <b><i>user experience</i></b> begins with understanding user needs, and I incorporate that perspective into every project.</p>
 
 <p>I’m excited to <b><i>continue learning</i></b> and look forward to <b><i>opportunities to grow</i></b> and <b><i>contribute</i></b> in the field.
  </p> 
  
  <button className="bg-primary mt-8 text-bases h-11 w-52 border-b-4 border-l-4 border-accent text-md rounded-md hover:bg-primaryLight "> <Link href={"#five"}> SHOW MY PROJECTS </Link> </button>

</div>

           </section>
       </div>
    
    )
}
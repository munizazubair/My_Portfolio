"use client";
import Link from "next/link"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"


const handleClick = () => {
  alert("Your Email is Send!")
}


export default function Contacts() {
    return(
        <div id="six.1" className=" bg-bases flex flex-col items-center gap-10" >
            <section className="section5  bg-bases h-screen  w-[100%] flex flex-col text-center items-center pt-10">
   <h1 className="style text-accent text-5xl font-bold text-center h-14 w-44 ">Contact</h1>

<div className="flex flex-col items-center relative">
<p className="text-primary text-9xl absolute top-5 font-thin">M</p>
<p className="text-accent text-8xl absolute top-12 font-thin">M</p>
</div>
<br />
<h3 className="style text-text text-2xl font-semibold mt-32">Muniza Zubair</h3>

<div className="pt-6 flex flex-col gap-5">
  <p></p>

  <div className="flex flex-col items-center gap-3">
<FaEnvelope className="text-text size-8"  />
  <Link href={"mailto:munizazubairkhan@gmail.com"} className=" h-8 bg-primaryLight hover:shadow-md hover:shadow-accent font-semibold w-[75vw]" >munizazubairkhan@gmail.com</Link>
</div>

<div className="flex flex-col items-center gap-3">
<FaLinkedin className="text-text size-8"  />
  <Link href={"https://www.linkedin.com/in/muniza-zubair-0882b82b6/"} className=" h-8 bg-primaryLight hover:shadow-md hover:shadow-accent font-semibold w-[75vw]" >linkedin.com/in/muniza-zubair</Link>
</div>

<div className="flex flex-col items-center gap-3">
  <FaGithub className="text-text size-8" />
  <Link href={"https://github.com/munizazubair"} className=" h-8 bg-primaryLight hover:shadow-md hover:shadow-accent font-semibold w-[75vw]" >github.com/munizazubair</Link>
</div>




</div>
</section>
{/* </section> */}
<form action ="" className="bg-bases flex flex-col justify-center gap-2 border-2 border-primary rounded-lg shadow-xl shadow-primary h-[80vh]  w-[90%] mb-5 px-7 ">

<label htmlFor="name" className="text-black">Name</label>
<input type="name" className="h-10 w-[90%] hover:shadow-inner hover:shadow-primary"  id="name" />

<label htmlFor="phoneNo" className="text-black">Phone Number <span className="text-red-700">*</span></label>
<input type="number" className="h-10 w-[90%] hover:shadow-inner hover:shadow-primary" id="phoneNo" />

<label htmlFor="email" className="text-black">E-mail <span className="text-red-700">*</span></label>
<input type="email" className="h-10 w-[90%] hover:shadow-inner hover:shadow-primary" id="email" />

<label htmlFor="message" className="text-black">Message<span className="text-red-700">*</span></label>
<textarea name="comments" className="h-28 w-[90%] hover:shadow-inner hover:shadow-primary" id="message" ></textarea>

<button onClick={handleClick} className="bg-primary text-bases h-12 w-52 border-b-4 border-l-4 my-[4vh] border-accent text-lg rounded-md md:h-12 md:w-56 md:text-xl lg:text-lg hover:bg-primaryLight ">Send Email</button>
</form>

        </div>
      
    )
}
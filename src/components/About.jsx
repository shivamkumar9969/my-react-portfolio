import React from "react";
import "./About.css"
import Pic from "../assets/pic3.jpg";

const About = () => {
  return (
    <>
      <div className="h-screen w-screen my-32 mx-64 flex items-center   ">
        <div className="animated-container sm:animate-none">
          <img
            className=" animated-image h-96 w-96 bg-cover rounded-full"
            src={Pic}
            alt="Profile"
          />
        </div>
        <div className="details mx-14 bg-transparent text-gray">
          <h1 className="text-6xl from-neutral-900">Shivam Kumar</h1>
          <p className="text-2xl mt-4 font-semibold">A Bit About Me</p>
          <p className="whitespace-pre-line text-base font-medium mt-3">
            A passionate Fullstack and Software Developer currently pursuing
            {"\n"} a Master of Computer Applications with a specialization in
            Cloud {"\n"}Computing and DevOps. With a dynamic skill set and an
            insatiable{"\n"} curiosity, I'm committed to pushing the boundaries
            of technology.
          </p>

          <div className="social-account ">
            <ul className="flex mt-3 text-3xl" >
              <li className="m-2">
                <a className=" border-white block rounded-full relative overflow-hidden  hover:text-white hover:bg-black hover:opacity-[0.8]" href="https://github.com/shivamkumar9969">
                  <i className="fa-brands fa-github p-1 "></i>
                </a>
              </li>

              <li className="m-2">
                <a className="border-2 border-solid border-white block rounded-full relative overflow-hidden  hover:text-white hover:bg-[#0077b5] hover:opacity-[0.8]" href="https://www.linkedin.com/in/shivam-kumar-7b896a254/">
                  <i className="fa-brands fa-linkedin p-1"></i>
                </a>
              </li>
              <li className="m-2">
                <a className="border-2 border-solid border-white block rounded-full relative overflow-hidden hover:text-white hover:bg-gradient-to-br hover:from-red-500 hover:to-blue-500 " href="https://www.instagram.com/itz_shiv___/">
                  <i class="fa-brands fa-instagram p-1"></i>
                </a>
              </li >

              <li className="m-2">
                <a className="border-2 border-solid border-white block rounded-full relative overflow-hidden  hover:text-white hover:bg-[#4267B2] hover:opacity-[.8] " href="https://www.facebook.com/profile.php?id=100011586043603">
                  <i className="fa-brands fa-facebook p-1"></i>
                </a>
              </li>

              <li className="m-2">
                <a className="border-2 border-solid border-white block rounded-full relative overflow-hidden   hover:text-white hover:bg-[#1DA1F2] hover:opacity-[.8]" href="https://twitter.com/shivamkumar9969">
                  <i className="fa-brands fa-twitter p-1"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </>
  );
}

export default About;

import './Nav.css'
import { Link } from 'react-scroll';

function Nav() {

  return (
    <>
      <div className="mt-0 pt-0 w-screen h-14 handleScroll  bg-[rgb(16,15,15)] font-medium flex justify-center items-center fixed ">
        <div className="nav-name font-extrabold text-4xl ">
          Shivam Kumar
        </div>
        <div className="nav-custom text-white ">
          <ul className=" flex  justify-start ml-52 px-12 space-x-12 text-xl text-blue-100 ">
            <li className="cursor-pointer glow-on-hover  "> <Link to="/Home" spy={true} smooth={true} offset={50} duration={500} >Home</Link></li>
            <li className="cursor-pointer glow-on-hover "><Link to="/About" spy={true} smooth={true} offset={50} duration={500} >About</Link></li>
            <li className="cursor-pointer glow-on-hover "><Link to="/Skills" spy={true} smooth={true} offset={50} duration={500} >Skills</Link></li>
            <li className="cursor-pointer glow-on-hover ">Achievement</li>
            <li className="cursor-pointer glow-on-hover ">Contact</li>
          </ul>
        </div>
        <div className=" res font-thin text-white ml-8 text-xl ">
          <a href="shiv.pdf " download="Shivam_resume.pdf">
            <i className="fa-solid fa-file-arrow-down px-2"></i>
            Download Resume
          </a>
        </div>
      </div>
    </>
  );
}

export default Nav;

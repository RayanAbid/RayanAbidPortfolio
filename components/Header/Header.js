import React from "react";
import { socialLinks } from "../../assets/utils/constants";

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className=" relative flex flex-wrap items-center justify-between  py-3 px-10 bg-main mb-0">
        <div className=" px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm xs:block md:hidden font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="/"
            >
              Rayan Abid
            </a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              {socialLinks.map((item) => (
                <li className="nav-item">
                  <a
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    target="_blank"
                    href={item.link}
                  >
                    <i
                      className={`${item.icon} 
                      ${item.icon == "fab fa-twitter" && "text-[#1DA1F2]"}
                      ${item.icon == "fab fa-linkedin" && "text-[#0072B1]"}
                      ${item.icon == "fab fa-hashnode" && "text-[#2962FF]"}
                       ${item.iconColor} 
                      
                      text-lg leading-lg  `}
                    ></i>
                    <span className="ml-2 ">{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

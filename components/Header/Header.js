import React from "react";

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
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  target="_blank"
                  href="https://github.com/rayanabid"
                >
                  <i className="fab fa-github-square text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2">Github</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  target="_blank"
                  href="https://twitter.com/rayanDoesTech/"
                >
                  <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2">Tweet</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  target="_blank"
                  href="https://www.linkedin.com/in/rayanabid/"
                >
                  <i className="fab fa-linkedin text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2">Linkedin</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  target="_blank"
                  href="https://www.youtube.com/channel/UCbUlt1T9VdaD-9ewO0D5B8w"
                >
                  <i className="fab fa-youtube text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2">Youtube</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  target="_blank"
                  href="https://rayanabid.hashnode.dev/"
                >
                  <i className="fab fa-hashnode text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2">Blogs</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

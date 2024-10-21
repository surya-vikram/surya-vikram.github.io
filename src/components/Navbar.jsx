import "../Navbar.scss";
import { useRef, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const navList = useRef();
  const navToggle = useRef();
  const [isOpen, setIsOpen] = useState(false);

  function navTogglefunction() {
    const visibility = navList.current.getAttribute("data-visible");

    if (visibility === "false") {
      navList.current.setAttribute("data-visible", "true");
      navToggle.current.setAttribute("aria-expanded", "true");
      setIsOpen(true);
    } else {
      navList.current.setAttribute("data-visible", "false");
      navToggle.current.setAttribute("aria-expanded", "false");
      setIsOpen(false);
    }
  }

  return (
    <section className="navbar-section sm:p-3 text-[--color-1] flex items-center justify-between">
      <div className="logo">Logo</div>

      <button 
        aria-controls="#navbar-list"
        aria-expanded="false"
        onClick={navTogglefunction}
        ref={navToggle}
        className="nav-toggle-button aspect-square top-5 right-8 [@media(max-width:40em)]:block hidden p-1 rounded-full bg-[#0000003f]"
      >
        <span className={`${isOpen ? "hidden" : "visible"}`}>
          <RxHamburgerMenu size={30} />
        </span>
        <span className={`${isOpen ? "visible" : "hidden"}`}>
          <AiOutlineClose size={30} />
        </span>
      </button>

      <nav>
        <ul
          id="navbar-list"
          className="flex gap-5 sm:py-8 sm:px-16 navbar-list"
          data-visible="false"
          ref={navList}
        >
          <li className="hover:-translate-y-1 transition-all hover:shadow-xl rounded-lg p-2 ease-linear">
            <a href="#about-section">
              <span aria-hidden="true">00</span>ABOUT
            </a>
          </li>
          <li className="hover:-translate-y-1 transition-all hover:shadow-xl rounded-lg p-2 ease-linear">
            <a href="#projects-section">
              <span aria-hidden="true">01</span>PROJECTS
            </a>
          </li>
          <li className="hover:-translate-y-1 transition-all hover:shadow-xl rounded-lg p-2 ease-linear">
            <a href="#">
              <span aria-hidden="true">02</span>EDUCATION
            </a>
          </li>
          <li className="hover:-translate-y-1 transition-all hover:shadow-xl rounded-lg p-2 ease-linear">
            <a href="#contact-section">
              <span aria-hidden="true">03</span>CONTACT
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Navbar;

import { useEffect } from "react";
import HoverLinks from "./HoverLinks";
import "./styles/Navbar.css";

const Navbar = () => {
  useEffect(() => {
    const links = document.querySelectorAll(".header ul a");

    const clickHandler = (e: Event) => {
      e.preventDefault();
      const anchor = e.currentTarget as HTMLAnchorElement;
      const section = anchor.getAttribute("data-href");
      if (!section) return;
      const target = document.querySelector(section) as HTMLElement | null;
      target?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    links.forEach((elem) => {
      elem.addEventListener("click", clickHandler);
    });

    return () => {
      links.forEach((elem) => {
        elem.removeEventListener("click", clickHandler);
      });
    };
  }, []);
  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          Nishant Landage
        </a>
        <a
          href="mailto:landagenishant25@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          landagenishant25@gmail.com
        </a>
        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;

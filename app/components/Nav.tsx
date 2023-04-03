import { NavLink, useLocation } from "@remix-run/react";
import ThemeToggle from "./ThemeToggle";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const activeClassName = "selected navlink";
const activeStyleCallback = ({ isActive }: { isActive: Boolean }) =>
  isActive ? activeClassName : "navlink";

// All the links are prefetched on render.
const NavLinks = () => {
  return (
    <>
      <NavLink to="/" prefetch="render" className={activeStyleCallback}>
        Home
      </NavLink>
      <NavLink to="/blog" prefetch="render" className={activeStyleCallback}>
        Blog
      </NavLink>
      <NavLink to="/projects" prefetch="render" className={activeStyleCallback}>
        Projects
      </NavLink>
    </>
  );
};

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <>
      <nav className="flex flex-[1] items-center justify-end overflow-hidden">
        <div className="hidden justify-end lg:flex">
          <NavLinks />
        </div>
        <div className="w-[75px] lg:w-[100px]">
          <ThemeToggle />
        </div>

        <div className="flex w-[75px] justify-end lg:hidden">
          <button onClick={toggleNavbar}>
            {isOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div key="nav-links" className="mt-4 basis-full lg:hidden">
          <NavLink to="/" prefetch="render" className={activeStyleCallback}>
            Home
          </NavLink>

          <NavLink to="/blog" prefetch="render" className={activeStyleCallback}>
            Blog
          </NavLink>

          <NavLink
            to="/projects"
            prefetch="render"
            className={activeStyleCallback}
          >
            Projects
          </NavLink>
        </div>
      )}
    </>
  );
};

export default Nav;

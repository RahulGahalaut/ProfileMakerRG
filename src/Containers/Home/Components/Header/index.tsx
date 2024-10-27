import { useState } from "react";
import Download from "@mui/icons-material/Download";
import MenuIcon from "@mui/icons-material/Menu";
import Close from "@mui/icons-material/Close";
import ArrowDropUp from "@mui/icons-material/ArrowDropUp";
const IS_MOBILE = window.innerWidth < 768;

const LINKS_DATA = [
  {
    href: "#experience",
    text: "EXPERIENCE",
  },
  {
    href: "#education",
    text: "EDUCATION",
  },
  {
    href: "#skills",
    text: "SKILLS",
  },
  {
    href: "#others",
    text: "OTHERS",
  },
];

const NavLink = ({ href, text }) => {
  return (
    <a
      href={href}
      className="px-6 md:px-0 py-3 md:py-0 border-t border-slate-400/30 md:border-0 bg-black md:bg-transparent hover:bg-black/90 md:hover:bg-transparent first:border-0"
    >
      {text}
    </a>
  );
};

const NavLinks = () => {
  return (
    <div className="flex flex-col md:flex-row md:gap-3.5 font-light md:font-extralight text-white">
      {LINKS_DATA.map((linkData) => (
        <NavLink {...linkData} />
      ))}
    </div>
  );
};

const Header = () => {
  const [showMenuDropdown, setShowMenuDropdown] = useState(false);

  const renderMenuBar = () => {
    return (
      <div className="relative md:hidden">
        {showMenuDropdown ? (
          <>
            <Close
              onClick={() => setShowMenuDropdown(false)}
              className="cursor-pointer"
            />
            <ArrowDropUp className="absolute top-[14px] left-[-0.5px]" />
            <dialog
              open={true}
              className="flex flex-col rounded-lg top-[120%] left-[-8px] overflow-hidden"
              onClick={() => setShowMenuDropdown(false)}
            >
              <NavLinks />
            </dialog>
          </>
        ) : (
          <MenuIcon
            className="cursor-pointer"
            onClick={() => setShowMenuDropdown(true)}
          />
        )}
      </div>
    );
  };

  return (
    <header className="h-[10%] w-full bg-gradient-to-b from-slate-950/50 to-slate-700/50">
      <div className="flex justify-between  items-center text-sm md:text-lg text-white p-4 w-full h-full">
        <nav className="flex items-center gap-2 md:gap-5">
          {renderMenuBar()}
          <a href="#about" className="font-medium">
            RAHUL GAHALAUT
          </a>
          <div className="hidden md:flex">
            <NavLinks />
          </div>
        </nav>
        <button className="bg-black px-2 md:px-4 py-1 rounded-lg shadow-white shadow-sm hover:shadow-lg ">
          RESUME
          <Download fontSize="inherit" className="ml-1 animate-pulse" />
        </button>
      </div>
    </header>
  );
};

export default Header;

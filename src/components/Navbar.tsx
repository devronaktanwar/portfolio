import { twMerge } from "tailwind-merge";
import { FC, useState } from "react";
import { RiMenu2Line } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { PiBagSimpleBold } from "react-icons/pi";
import { FiTarget } from "react-icons/fi";
import { GrHomeRounded } from "react-icons/gr";
import { FiPhone } from "react-icons/fi";

interface navlinksObjProps {
  title: string;
  isActive: boolean;
  isLast?: boolean;
  to: string;
}

const initialNavLinks: navlinksObjProps[] = [
  {
    title: "Home",
    isActive: true,
    to: "/",
  },
  {
    title: "About",
    isActive: false,
    to: "#about",
  },
  {
    title: "Experience",
    isActive: false,
    to: "#experience",
  },
  {
    title: "Projects",
    isActive: false,
    to: "#projects",
  },
  {
    title: "Education",
    isActive: false,
    isLast: true,
    to: "#education",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const [navlinks, setNavlinks] = useState(initialNavLinks);
  const handleActive = (clickedIndex: number) => {
    setNavlinks((prevLinks) =>
      prevLinks.map((link, index) => ({
        ...link,
        isActive: index === clickedIndex,
      }))
    );
  };

  return (
    <div className="sticky top-0 bg-primaryBg z-50">
      <nav className="flex w-[80%] m-auto py-6 justify-between items-center">
        <h1 className="font-bold sm:text-4xl text-3xl">
          Rona
          <span
            className="text-transparent bg-clip-text"
            style={{
              background:
                "linear-gradient(267deg, #DA7C25 .36%, #B923E1 102.06%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            k.
          </span>
        </h1>
        <ul className="md:flex gap-6 flex-[0.5] justify-between hidden">
          {navlinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.to}
                className={twMerge(
                  "text-base relative pb-2",
                  link.isActive ? "border-b-2 border-transparent" : ""
                )}
                style={
                  link.isActive
                    ? {
                        borderImageSource:
                          "linear-gradient(267deg, #DA7C25 .36%, #B923E1 102.06%)",
                        borderImageSlice: 1,
                      }
                    : {}
                }
                onClick={() => handleActive(index)}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden md:block">
          <a href="#contact">
            <button
              className="px-4 py-3 rounded-full flex items-center"
              style={{
                background:
                  "linear-gradient(267deg, #DA7C25 .36%, #B923E1 102.06%)",
              }}
            >
              Connect With Me
            </button>
          </a>
        </div>
        <div className="md:hidden relative">
          <RiMenu2Line size={24} onClick={toggleMenu} />
          <div
            className={twMerge(
              isOpen ? "translate-0 scale-100" : "scale-0",
              "origin-top-right absolute right-4 top-8 transition-transform duration-300"
            )}
          >
            <MobileNav />
          </div>
        </div>
      </nav>
    </div>
  );
};

interface lMobileNavProps {}
const MobileNav: FC<lMobileNavProps> = () => {
  return (
    <div className="border px-5 py-2 text-sm bg-primaryBg rounded-xl">
      <div className="flex flex-col space-y-2">
        <div className="flex items-center gap-4 border-b pb-2 border-dashed border-[#ffffff3b]">
          <GrHomeRounded />
          <a href="/">Home</a>
        </div>
        <div className="flex items-center gap-4 border-b pb-2 border-dashed border-[#ffffff3b]">
          <FaRegUser />
          <a href="#about">About</a>
        </div>
        <div className="flex items-center gap-4 border-b pb-2 border-dashed border-[#ffffff3b]">
          <PiBagSimpleBold />
          <a href="#experience">Experience</a>
        </div>
        <div className="flex items-center gap-4 border-b pb-2 border-dashed border-[#ffffff3b]">
          <PiBagSimpleBold />
          <a href="#education">Education</a>
        </div>
        <div className="flex items-center gap-4 border-b pb-2 border-dashed border-[#ffffff3b]">
          <FiTarget />
          <a href="#projects">Portfolio</a>
        </div>
        <div className="flex items-center gap-4">
          <FiPhone />
          <a href="#contact">Contact</a>
        </div>
      </div>
    </div>
  );
};
export default Navbar;

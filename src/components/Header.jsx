import React, { useContext, useEffect, useState } from "react";
// Context
import { CartContext, SidebarContext } from "../contexts";
// react-icons
import { BsBag } from "react-icons/bs";
import { IoIosContact } from "react-icons/io";

// react-router-dom
import { Link } from "react-router-dom";
// Assets
import { Logo } from "../assets";
import { useTheme } from "../contexts/ThemeContext";

const Header = () => {
  //toggle theme
  const { isdark, toggletheme } = useTheme();

  //button effect
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 300);
  };

  // Header State
  const [isActive, setIsActive] = useState(false);

  // Context
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  // Event Listner
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  }, []);

  return (
    <div className={`${isdark && "dark"} transition-colors duration-1000`}>
      {/* <header className={`${isActive ? "bg-white py-4 shadow-md" : "bg-none py-6"} dark:bg-black fixed w-full z-10 transition-all`}> */}
      <header className={`bg-white py-6 dark:bg-black fixed w-full z-10 transition-all`}>
        <div className="container mx-auto flex items-center justify-between h-full">
          {/* Logo */}
          <Link to={"/"}>
            <div>
              <button className={`${isClicked ? "bg-red-100 transition duration-300" : ""} `} onClick={handleClick}>
                <img className="w-[40px] hover:scale-125 hover:animate-spin dark:bg-white" src={Logo} alt="" />
              </button>
            </div>
          </Link>

          {/* Theme */}
          <div>
            <button onClick={toggletheme} className={`animate-pulse w-12 h-12 bottom-12 right-12 bg-black dark:bg-white rounded-full text-white dark:text-black font-semibold `}>
              {isdark ? "LHT" : "DRK"}
            </button>
          </div>

          {/* Help */}
          <div>
            <Link to={"/help"}>
              <button
                className={`hover:bg-orange-200 ${
                  isdark && "dark:hover:bg-orange-200"
                } animate-pulse w-12 h-7 bottom-12 right-12 bg-black dark:bg-white text-white dark:text-black rounded-2xl`}>
                Help
              </button>
            </Link>
          </div>

          {/* contact */}
          <div>
            <Link to={"/contact"}>
              <button
                className={`hover:bg-orange-200 ${
                  isdark && "dark:hover:bg-orange-200"
                } flex items-center justify-center animate-pulse w-12 h-7 bottom-12 right-12 bg-black dark:bg-white text-white dark:text-black rounded-2xl`}>
                <IoIosContact size={24}/>
              </button>
            </Link>
          </div>

          {/* Cart */}
          <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer flex relative animate-bounce">
            <BsBag className={`text-2xl hover:text-green-400 dark:text-white ${isdark && "dark:hover:text-green-300"}`} />
            <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">{itemAmount}</div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;

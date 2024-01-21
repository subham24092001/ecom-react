import React from "react";
import { useTheme } from "../contexts/ThemeContext";

const Footer = () => {
  //toggle theme
  const { isdark } = useTheme();

  return (
    <div className={`${isdark && "dark"} transition-colors duration-1000`}>
      <footer className="bg-primary py-12 dark:bg-slate-800">
        <div className="container mx-auto">
          <p className="text-white text-center">Copyright &copy; Ecommerce Shop 2024. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

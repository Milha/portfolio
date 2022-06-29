import React from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";

function Header() {
  return (
    <div>
      <header className="fixed w-full h-20 shadow-xl z[100] bg-slate-100 z-30">
        <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
          <Logo />
          <Navbar />
        </div>
      </header>
    </div>
  );
}

export default Header;

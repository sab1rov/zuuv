import React, { useRef } from "react";
import Link from "next/link";
import { navbarData } from "../data/index.js";
import Image from "next/image";
import NavbarX from "../assets/Icons/NavbarX.js";
import Logo from "../assets/Icons/main_logo.svg";
import NavLinkItem from "./components/NavLinkItem.jsx";

function Navbar() {
  const menu = useRef(null);
  const menuBg = useRef(null);

  const opneMenu = () => {
    menu.current.classList.add("open");
    menuBg.current.classList.add("show");
    document.body.classList.add("hidden");
  };

  const closeMenu = () => {
    menu.current.classList.remove("open");
    menuBg.current.classList.remove("show");
    document.body.classList.remove("hidden");
  };

  return (
    <header className="header">
      <div className="container">
        <div className="navbar">
          <Link href="/" className="navbar__logo">
            <Image src={Logo} alt="logo" className="img" />
          </Link>

          <div className="navbar__menu">
            <ul className="menu">
              {navbarData.map((item) => (
                <NavLinkItem key={item?.id} item={item} />
              ))}
            </ul>
            <Link href="/#faq" className="navbar_btn">
              Biz bilan bog'laning
            </Link>
          </div>

          <button className="navbar__mobile" onClick={() => opneMenu()}>
            <svg
              width={31}
              height={31}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M.969 6.781H30.03a.969.969 0 0 0 0-1.937H.97a.97.97 0 0 0 0 1.937ZM30.031 14.531H.97a.97.97 0 0 0 0 1.938H30.03a.969.969 0 0 0 0-1.938ZM30.031 24.219H.97a.97.97 0 0 0 0 1.937H30.03a.969.969 0 0 0 0-1.937Z"
                fill="#000"
              />
            </svg>
          </button>

          <div
            className="navbar__content-bg"
            ref={menuBg}
            onClick={closeMenu}
          ></div>
          <div className="navbar__content" ref={menu}>
            <div className="close_icon">
              <button className="close_icon-btn" onClick={closeMenu}>
                <NavbarX />
              </button>
            </div>

            <ul className="menu">
              {navbarData.map((item) => (
                <NavLinkItem key={item?.id} item={item} closeMenu={closeMenu}/>
              ))}
            </ul>
            <Link href="/#faq" className="navbar_btn" onClick={closeMenu}>
              Biz bilan bog'laning
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;


import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../assets/Icons/main_logo.svg";

function Navbar() {
  return (
    <header className="header">
      <div className="container">
        <div className="navbar">
          <Link href="/" className="navbar__logo">
            <Image src={Logo} alt="logo" className="img" />
          </Link>
          <div className="navbar__menu">
            <ul className="menu">
              <li className="menu__item">
                <Link className="nav_link" href="#">
                  Bosh sahifa
                </Link>
              </li>
              <li className="menu__item">
                <Link className="nav_link" href="#">
                  Yuklab oling
                </Link>
              </li>
              <li className="menu__item">
                <Link className="nav_link" href="#">
                  Dastur haqida
                </Link>
              </li>
            </ul>
            <button className="navbar_btn">Biz bilan bog'laning</button>
          </div>
          <div className="navbar__mobile">
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
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;

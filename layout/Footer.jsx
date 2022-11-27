import React from "react";
import Image from "next/image";
import Logo from "../assets/Icons/main_logo.svg";
import AppxLink from "../assets/Images/appx_link.svg";
import AppleDownload from "../components/GlobalComponents/AppleDownload.jsx";
import GoogleDownload from "../components/GlobalComponents/GoogleDownload.jsx";
import Instagram from "../assets/Icons/Instagram.svg";
import Telegram from "../assets/Icons/Telegram.svg";
import Facebook from "../assets/Icons/Facebook.svg";
import Twitter from "../assets/Icons/Twitter.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__top-logo">
            <div className="logo-wrap">
              <Image src={Logo} alt="logo" />
            </div>
          </div>

          <div className="footer__top-directs">
            <div className="directs-wrap">
              <ul className="directs">
                <li className="directs__item">
                  <a href="">О нас</a>
                </li>
                <li className="directs__item">
                  <a href="">Партнерство</a>
                </li>
                <li className="directs__item">
                  <a href="">Компания</a>
                </li>
                <li className="directs__item">
                  <a href="">Контакты</a>
                </li>
              </ul>
              <ul className="directs">
                <li className="directs__item">
                  <a href="">О нас</a>
                </li>
                <li className="directs__item">
                  <a href="">Партнерство</a>
                </li>
                <li className="directs__item">
                  <a href="">Компания</a>
                </li>
                <li className="directs__item">
                  <a href="">Контакты</a>
                </li>
              </ul>
            </div>

            <div className="downloads">
              <h3 className="downloads_title">Availabe on</h3>
              <AppleDownload />
              <GoogleDownload />
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="social">
            <a className="social__item">
              <Image src={Instagram} alt="icon" />
            </a>
            <a className="social__item">
              <Image src={Telegram} alt="icon" />
            </a>
            <a className="social__item">
              <Image src={Facebook} alt="icon" />
            </a>
            <a className="social__item">
              <Image src={Twitter} alt="icon" />
            </a>
          </div>
          <div className="links">
            <div className="links_gmail">
              <a
                href="mailto:appxgroup@gmail.com"
                className="links_gamil-title"
              >
                appxgroup@gamil.com
              </a>
            </div>
            <div className="links_site">
              <a href="https://appx.uz" className="links_site-btn">
                <Image src={AppxLink} alt="appx" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

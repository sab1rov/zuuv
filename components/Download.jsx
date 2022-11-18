import React from "react";
import Image from "next/image";
import GoogleBtn from "./GlobalComponents/GoogleDownload.jsx";
import AppleBtn from "./GlobalComponents/AppleDownload.jsx";
import MainImg from "../assets/Images/download-img.png";

function Download() {
  return (
    <section className="main-download">
      <div className="container">
        <div className="download">
          <div className="download__text">
            <h1 className="download__text-title">
              ZUV - Har bir operatsion tizim uchun yuklab oling
            </h1>
            <div className="download__text-btns">
              <GoogleBtn/>
              <AppleBtn />
            </div>
          </div>
          <div className="download__img">
            <Image src={MainImg} alt="main-img" className="main-img"/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Download;

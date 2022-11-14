import React from "react";
import Image from "next/image";
import MainImg from "../assets/Images/general_img.png";
import Zuv from "../assets/Images/zuv.png";

function General() {
  return (
    <div className="main-general">
      <div className="container">
        <div className="general">
          <div className="general__content">
            <Image src={MainImg} alt="main image" className="img-main"/>
          </div>
          <div className="general__text">
            <div className="general__text-img">
              <Image src={Zuv} alt="zuv logo" className="img-zuv"/>
            </div>
            <h3 className="general__text-title">
              Aholi orasida viloyatlararo odamlar va yuklar qatnovini
              optimallashtirish uchun mobil ilova
            </h3>
            <button className="general__text-btn">Batafsil</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default General;

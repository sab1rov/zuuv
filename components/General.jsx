import React from "react";
import Image from "next/image";
import MainImg from "../assets/Images/general_img.png";
import Zuv from "../assets/Images/zuv.png";
import Airplane from "../assets/Images/Airplane.png";
import Lugguage from "../assets/Images/Luggage.png";
import Person from "../assets/Images/person.png";
import AirplaneRight from "../assets/Images/AirplaneRight.png";
import Automibe from "../assets/Images/Automobile.png";
import Train from "../assets/Images/Train.png";

function General() {
  return (
    <div className="main-general" id="general">
      <div className="container">
        <div className="general">
          <div className="general__content">
            <div className="image-content">
              <div className="main_img">
              <div className="icons_left">
                <div className="left_first-img">
                  <Image src={Airplane} alt="airplane" className=" imgOne" />
                </div>
                <div className="left_second-img">
                  <Image src={Lugguage} alt="lugguage" className=" imgTwo" />
                </div>
                <div className="left_third-img">
                  <Image src={Person} alt="person" className=" imgThree" />
                </div>
              </div>
                <Image src={MainImg} alt="main image" className="img-main" />
              <div className="icons_right">
                <div className="right_first-img">
                  <Image src={Automibe} alt="automobile" />
                </div>
                <div className="right_second-img">
                  <Image src={Train} alt="train" />
                </div>
                <div className="right_third-img">
                  <Image src={AirplaneRight} alt="airplane" />
                </div>
              </div>
              </div>
            </div>
          </div>

          <div className="general__text">
            <div className="general__text-img">
              <Image src={Zuv} alt="zuv logo" className="img-zuv" />
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

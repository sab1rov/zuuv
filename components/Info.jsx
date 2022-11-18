import Image from "next/image";
import React from "react";
import Briefcase from "../assets/Icons/Briefcase";
import Calendar from "../assets/Icons/Calendar";
import Track from "../assets/Icons/Track";

function Info() {
  const infoData = [
    {
      id: 1,
      img: <Track />,
      title: "Yetkazib berish uchun ajoyib servis",
      desc: "Buyumlaringiz tez va butun holatda yetib borishiga kafolat",
    },
    {
      id: 2,
      img: <Briefcase />,
      title: "Yetkazib berish uchun ajoyib servis",
      desc: "Buyumlaringiz tez va butun holatda yetib borishiga kafolat",
    },
    {
      id: 3,
      img: <Calendar />,
      title: "Yetkazib berish uchun ajoyib servis",
      desc: "Buyumlaringiz tez va butun holatda yetib borishiga kafolat",
    },
  ];
  return (
    <section className="main-info">
      <div className="container">
        <div className="info">
          {infoData.map((item) => {
            return (
              <div className="info__item" key={item.id}>
                <div className="info__item-img">
                    {item.img}
                </div>
                <h3 className="info__item-title">{item.title}</h3>
                <p className="info__item-desc">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Info;

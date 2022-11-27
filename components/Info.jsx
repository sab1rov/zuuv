import React from "react";
import { infoData } from "../data";

function Info() {
  return (
    <section className="main-info" id="info">
      <div className="container">
        <div className="info">
          {infoData.map((item) => {
            return (
              <div className="info__item" key={item.id}>
                <div className="info__item-img">{item.img}</div>
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

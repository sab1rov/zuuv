import Image from "next/image";
import React from "react";
import MainImg from "../assets/Images/Kuryer.png";

function Express() {
  return (
    <section className="main-express">
      <div className="container">
        <div className="express">
          <div className="express__item">
            <div className="express_text">
              <h1 className="express_text-title">Kuryermisiz?</h1>
            </div>
            <div className="express_content">
              <div className="express_content-img">
                <Image src={MainImg} alt="main image" />
              </div>
              <div className="express_content-text">
                <h3 className="main-title">ZUV Express</h3>
                <p className="main-desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Mollitia eum nam doloremque quia voluptatem dolorum reiciendis
                  commodi maxime odit aperiam.
                </p>
              </div>
            </div>
          </div>
          <div className="express__item second_item">
            <div className="express_text">
              <h1 className="express_text-title second_title">Yo'lovchimisiz?</h1>
            </div>
            <div className="express_content second_content">
              <div className="express_content-text">
                <h3 className="main-title">ZUV Express</h3>
                <p className="main-desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Mollitia eum nam doloremque quia voluptatem dolorum reiciendis
                  commodi maxime odit aperiam.
                </p>
              </div>
              <div className="express_content-img second_content-img">
                <Image src={MainImg} alt="main image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Express;

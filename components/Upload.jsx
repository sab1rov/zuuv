import React from "react";
import Image from "next/image";
import Samsung from "../assets/Images/Samsung Galaxy S22 Ultra.png";

function Upload() {
  return (
    <section className="upload">
      <div className="upload__item">
        <div className="container">
          <div className="upload_content">
            <Image src={Samsung} alt="samsung" className="upload_content-img" />
          </div>
          <div className="upload_text">
            
          </div>
        </div>
      </div>
      <div className="upload__sitem"></div>
    </section>
  );
}

export default Upload;

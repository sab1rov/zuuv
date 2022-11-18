import Image from "next/image";
import React from "react";
import Samsung from "../assets/Images/Samsung Galaxy S22 Ultra.png";
import Apple from "../assets/Images/iPhone 13 Pro.png";

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
      <div className="upload__item"></div>
    </section>
  );
}

export default Upload;

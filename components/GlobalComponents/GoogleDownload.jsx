import React from "react";
import Image from "next/image.js";
import Google from "../../assets/Images/google.svg";

function GoogleDownload() {
  return (
    <>
      <a className="button">
        <Image src={Google} alt="google" className="button_img"/>
      </a>
    </>
  );
}

export default GoogleDownload;

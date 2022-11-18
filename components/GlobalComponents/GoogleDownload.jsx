import React from "react";
import Image from "next/image.js";
import Google from "../../assets/Images/google.svg";

function GoogleDownload() {
  return (
    <>
      <button className="button">
        <Image src={Google} alt="google" className="button_img"/>
      </button>
    </>
  );
}

export default GoogleDownload;

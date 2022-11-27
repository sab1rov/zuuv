import React from "react";
import Image from "next/image.js";
import Apple from "../../assets/Images/App Store.svg";

function AppleDownload() {
  return (
    <>
      <a className="button">
        <Image src={Apple} alt="apple" className="button_img" />
      </a>
    </>
  );
}

export default AppleDownload;

import React from "react";
import Image from "next/image.js";
import Apple from "../../assets/Images/App Store.svg";

function AppleDownload() {
  return (
    <>
      <button className="button">
        <Image src={Apple} alt="apple" className="button_img" />
      </button>
    </>
  );
}

export default AppleDownload;

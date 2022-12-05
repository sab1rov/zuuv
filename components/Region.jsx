import React, { useEffect, useState } from "react";
import Image from "next/image";
import FirstImg from "../assets/Images/region_img-1.png";
import SecondImg from "../assets/Images/region_img-2.png";
import RegionBg from "../assets/Images/region_bg.png";
import RegionBgSmall from "../assets/Images/small_region-img.png";

function Region() {
  const [width, setWidth] = useState(0);

  const handleResize = () => setWidth(window.innerWidth);
  
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  return (
    <>
      <section className="main-region">
        <div className="container">
          <div className="region">
            <div className="region-bg">
              {width > 600 ? (
                <Image src={RegionBg} alt="background" />
              ) : (
                <Image src={RegionBgSmall} alt="background" />
              )}
              <div className="region__item first_item">
                <div className="item_text first_text">
                  <h3 className="item_text-title">
                    O'zbekistonni barcha viloyatlariga
                  </h3>
                  <p className="item_text-desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vitae repellendus doloribus accusantium sequi non
                    voluptatibus omnis maxime expedita, architecto suscipit.
                  </p>
                </div>
              </div>

              <div className="region__item second_item">
                <div className="item_text second_text">
                  <h3 className="item_text-title">
                    24/7 Qo'llab quvvatlash markazi
                  </h3>
                  <p className="item_text-desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vitae repellendus doloribus accusantium sequi non
                    voluptatibus omnis maxime expedita, architecto suscipit.
                  </p>
                </div>
                <div className="item_img first_img">
                  <Image src={FirstImg} alt="first image" />
                </div>
              </div>

              <div className="region__item third_item">
                <div className="item_img second_img">
                  <Image src={SecondImg} alt="second image" />
                </div>
                <div className="item_text">
                  <h3 className="item_text-title">Bepul e'lon joylashtrish</h3>
                  <p className="item_text-desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vitae repellendus doloribus accusantium sequi non
                    voluptatibus omnis maxime expedita, architecto suscipit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Region;

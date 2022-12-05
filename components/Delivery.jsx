import Image from "next/image";
import React from "react";
import Train from "../assets/Images/Train.png";
import CardImg from "../assets/Images/card__img.svg";
import Profile from "../assets/Images/profile picture.png";

function Delivery() {
  return (
    <section className="main-delivery">
      <div className="container">
        <div className="delivery">
          <div className="delivery__text">
            <h1 className="delivery__text-title">
              Yuklaringizni hohlagan transportda yetkazib berish
            </h1>
          </div>

          <div className="delivery__content">
            <div className="content__item">
              <div className="content__item-text">
                <h3 className="main__title">Mashinda yetkazish</h3>
                <p className="main__desc">
                  Aholi orasida viloyatlararo odamlar va yuk qatnovini
                  optimallashtirish uchun mobil ilova
                </p>
              </div>

              <div className="content__item-card">
                <div className="card__top">
                  <div className="card__top-left">
                    <div className="left__img">
                      <Image src={Train} alt="train image" />
                    </div>
                    <p className="left__text">
                      <span>Poyezd</span> da yetkaziladi
                    </p>
                  </div>
                  <div className="card__top-right">
                    <svg
                      width={36}
                      height={36}
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#a)">
                        <path
                          d="M29.25 20.352 18 31.494 6.75 20.352m0 0A7.5 7.5 0 1 1 18 10.502a7.5 7.5 0 1 1 11.25 9.859"
                          stroke="#db244a"
                          strokeWidth={1.5}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="a">
                          <path fill="#fff" d="M0 0h36v36H0z" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>

                <div className="card__center">
                  <div className="card__center-left">
                    <div className="left__img">
                      <Image src={CardImg} alt="card image" />
                    </div>
                    <div className="left__text">
                      <p className="region">Urgench</p>
                      <p className="region">Tashkent</p>
                    </div>
                  </div>
                  <div className="card__center-right">
                    <span className="right__item">Jo'nash vaqti:</span>
                    <span className="right__item right__item_second">
                      20-sprel
                    </span>
                  </div>
                </div>

                <div className="card__bottom">
                  <div className="card__bottom-left">
                    <div className="left__img">
                      <Image src={Profile} alt="profile picture" />
                    </div>
                    <p className="left-name">Jamshid Qo'chqorov</p>
                  </div>
                  <div className="card__bottom-right">
                    <span className="right__item">Narx:</span>
                    <span className="right__item right__item_second">
                      200 000 so'm
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="content__item content__item_second">
              <div className="content__item-card">
                <div className="card__top">
                  <div className="card__top-left">
                    <div className="left__img">
                      <Image src={Train} alt="train image" />
                    </div>
                    <p className="left__text">
                      <span>Poyezd</span> da yetkaziladi
                    </p>
                  </div>
                  <div className="card__top-right">
                    <svg
                      width={36}
                      height={36}
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#a)">
                        <path
                          d="M29.25 20.352 18 31.494 6.75 20.352m0 0A7.5 7.5 0 1 1 18 10.502a7.5 7.5 0 1 1 11.25 9.859"
                          stroke="#db244a"
                          strokeWidth={1.5}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="a">
                          <path fill="#fff" d="M0 0h36v36H0z" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>

                <div className="card__center">
                  <div className="card__center-left">
                    <div className="left__img">
                      <Image src={CardImg} alt="card image" />
                    </div>
                    <div className="left__text">
                      <p className="region">Urgench</p>
                      <p className="region">Tashkent</p>
                    </div>
                  </div>
                  <div className="card__center-right">
                    <span className="right__item">Jo'nash vaqti:</span>
                    <span className="right__item right__item_second">
                      20-sprel
                    </span>
                  </div>
                </div>

                <div className="card__bottom">
                  <div className="card__bottom-left">
                    <div className="left__img">
                      <Image src={Profile} alt="profile picture" />
                    </div>
                    <p className="left-name">Jamshid Qo'chqorov</p>
                  </div>
                  <div className="card__bottom-right">
                    <span className="right__item">Narx:</span>
                    <span className="right__item right__item_second">
                      200 000 so'm
                    </span>
                  </div>
                </div>
              </div>
              <div className="content__item-text">
                <h3 className="main__title">Mashinda yetkazish</h3>
                <p className="main__desc">
                  Aholi orasida viloyatlararo odamlar va yuk qatnovini
                  optimallashtirish uchun mobil ilova
                </p>
              </div>
            </div>

            <div className="content__item">
              <div className="content__item-text">
                <h3 className="main__title">Mashinda yetkazish</h3>
                <p className="main__desc">
                  Aholi orasida viloyatlararo odamlar va yuk qatnovini
                  optimallashtirish uchun mobil ilova
                </p>
              </div>

              <div className="content__item-card">
                <div className="card__top">
                  <div className="card__top-left">
                    <div className="left__img">
                      <Image src={Train} alt="train image" />
                    </div>
                    <p className="left__text">
                      <span>Poyezd</span> da yetkaziladi
                    </p>
                  </div>
                  <div className="card__top-right">
                    <svg
                      width={36}
                      height={36}
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#a)">
                        <path
                          d="M29.25 20.352 18 31.494 6.75 20.352m0 0A7.5 7.5 0 1 1 18 10.502a7.5 7.5 0 1 1 11.25 9.859"
                          stroke="#db244a"
                          strokeWidth={1.5}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="a">
                          <path fill="#fff" d="M0 0h36v36H0z" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>

                <div className="card__center">
                  <div className="card__center-left">
                    <div className="left__img">
                      <Image src={CardImg} alt="card image" />
                    </div>
                    <div className="left__text">
                      <p className="region">Urgench</p>
                      <p className="region">Tashkent</p>
                    </div>
                  </div>
                  <div className="card__center-right">
                    <span className="right__item">Jo'nash vaqti:</span>
                    <span className="right__item right__item_second">
                      20-sprel
                    </span>
                  </div>
                </div>

                <div className="card__bottom">
                  <div className="card__bottom-left">
                    <div className="left__img">
                      <Image src={Profile} alt="profile picture" />
                    </div>
                    <p className="left-name">Jamshid Qo'chqorov</p>
                  </div>
                  <div className="card__bottom-right">
                    <span className="right__item">Narx:</span>
                    <span className="right__item right__item_second">
                      200 000 so'm
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Delivery;

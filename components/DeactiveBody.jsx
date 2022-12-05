import React, { useState, useRef } from "react";
import Image from "next/image";
import axios from "axios";
import MainImage from "../assets/Images/deactiveImage.svg";

function DeactiveBody() {
  const [codeLength, setCodeLength] = useState();
  const [disabled, setDisabled] = useState(false);
  const [secondStep, setSecondStep] = useState(false);
  const [btnText, setBtnText] = useState(false);
  const [inputValue, setInputValue] = useState({
    phone: "+998",
    code: "",
  });

  const secondLabel = useRef(null);
  const phoneError = useRef(null);

  const deleteUser = async () => {
    const res = await axios.delete(
      "https://zuv-api.main-gate.appx.uz/api/v1/user/delete",
      { data: { phone: inputValue.phone.replace(/[^\d.+]/g, "") } }
    );
    if (res.data.data) {
      console.log("data");
      secondLabel.current.classList.add("active");
      setDisabled(!disabled);
      setSecondStep(true);
    } else if (res.data.error) {
      console.log(res.data.error.uz);
    }
    console.log("delete");
  };

  const confirmCode = async () => {
    console.log("confirm");
    const res = await axios.post(
      "https://zuv-api.main-gate.appx.uz/api/v1/user/submitDelete",
      { phone: inputValue.phone, otp: inputValue.code }
    );
    if (codeLength < 5) {
      console.log("yozz");
    } else {
      if (Boolean(res.data.data)) {
        setBtnText(true);
        console.log("data galdi");
      } else {
        console.log("error mesage");
      }
    }
  };

  const getPhoneValue = (e) => {
    const value = e.target.value;

    const x = value
      .replace(/\D/g, "")
      .match(/(\d{0,3})(\d{0,2})(\d{0,3})(\d{0,2})(\d{0,2})/);

    const result = `${x[1] !== "" ? "+" + x[1] : ""}${
      x[2] !== "" ? " (" + x[2] : ""
    }${x[3] !== "" ? ")_" + x[3] : ""}${x[4] !== "" ? "_" + x[4] : ""}${
      x[5] !== "" ? "_" + x[5] : ""
    }`;
    setInputValue({ ...inputValue, phone: result });
  };

  const getCodeValue = (e) => {
    setCodeLength(e.target.value.length);
    if (codeLength < 5) {
      setInputValue({ ...inputValue, code: e.target.value });
      console.log("input");
    }
  };

  const isValid = inputValue.phone.length >= 19;
  isValid;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isValid) {
      secondStep ? confirmCode() : deleteUser();
    }
  };

  const onBlur = () => {
    if (!isValid) {
      phoneError.current.classList.add("show");
    }
  };

  return (
    <main className="main">
      <div className="main-deactive">
        <div className="container">
          <div className="deactive">
            <div className="deactive__text">
              <h1 className="deactive-title">Lorem ipsum dolor amet</h1>
              <p className="deactive-desc">
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
              </p>

              <form
                className="deactive-input"
                onSubmit={(e) => handleSubmit(e)}
              >
                <div className="form__item">
                  <label className="label" htmlFor="phone">
                    Telefon raqam
                    <span
                      className={`phone__error ${!isValid && ""}`}
                      ref={phoneError}
                    >
                      (raqamda xatolik)
                    </span>
                  </label>
                  <input
                    onChange={(e) => getPhoneValue(e)}
                    value={inputValue?.phone}
                    onBlur={onBlur}
                    id="input"
                    disabled={disabled}
                    placeholder="+998941196888"
                  />
                </div>
                <div className="form__item form__item_second" ref={secondLabel}>
                  <label className="label" htmlFor="phone">
                    Tasdiqlash kodi
                  </label>
                  <input
                    onChange={(e) => getCodeValue(e)}
                    value={inputValue?.code}
                    type="number"
                    id="input"
                    placeholder="code"
                    maxLength={5}
                  />
                  {/* {!isValid && <span className="small">Raqam xato</span>} */}
                </div>
                <button
                  className={`deactive-btn ${isValid && "valid"}`}
                  type="submit"
                >
                  {btnText ? "Bosh sahifa" : "Davom etish"}
                </button>
              </form>
            </div>

            <div className="deactive__content">
              <Image src={MainImage} alt="main image" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default DeactiveBody;

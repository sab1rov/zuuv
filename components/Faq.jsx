import React, { useState } from "react";
import { accardionData } from "../data";
import FaqItem from "./FaqItem";

function Faq() {
  const [inputValue, setInputValue] = useState({
    phone: "+998",
    question: "",
  });

  const getInValue = (e) => {
    setInputValue({ ...inputValue, phone: e.target.value });
  };

  const getAreaValue = (e) => {
    setInputValue({ ...inputValue, question: e.target.value });
  };

  const isValid =
    inputValue.phone.length >= 13 && inputValue.question.length >= 10;

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="main-faq" id="faq">
      <div className="container">
        <div className="faq">
          <div className="faq__text">
            <h1 className="faq__text-title">
              Ko'p beriladigan savollarga javoblar
            </h1>
          </div>

          <div className="faq__content">
            <ul className="faq__content-accordion">
              {accardionData.map((item) => {
                return <FaqItem item={item} key={item.id} />;
              })}
            </ul>

            <form
              className="faq__content-question"
              onSubmit={(e) => handleSubmit(e)}
            >
              <h5 className="question_left-title">Yana savollar qoldimi?</h5>

              <h3 className="question_send-title">Biz javob beramiz!</h3>

              <div className="question_input">
                <input
                  type="text"
                  value={inputValue.phone}
                  placeholder="telefon raqam"
                  onChange={(e) => getInValue(e)}
                />
              </div>

              <div className="question_textarea">
                <textarea
                  cols="10"
                  rows="5"
                  className=""
                  value={inputValue.question}
                  placeholder="savol"
                  onChange={(e) => getAreaValue(e)}
                ></textarea>
              </div>
              <button
                className={`question_btn ${isValid && "valid"}`}
                type="submit"
              >
                Jo'natish
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faq;

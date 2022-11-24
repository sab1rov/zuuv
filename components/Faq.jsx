import React from "react";
import FaqItem from "./FaqItem";

function Faq() {
  const accardionData = [
    {
      id: 1,
      title: "Zuv dasturi qanchalik ishonchli",
      desc: "Mobil ilova orqali yuklaganlaringizni, shu yo'nalishda yo'lga chiqqan transport egalari orqali berib yuborishingiz mumkin. Yo'lovchi sifatida ham  ularga sherik bo'lishingiz mumkin hi lorem ipsum dolor view",
    },
    {
      id: 2,
      title: "Zuv dasturi qanchalik ishonchli",
      desc: "Mobil ilova orqali yuklaganlaringizni, shu yo'nalishda yo'lga chiqqan transport egalari orqali berib yuborishingiz mumkin. Yo'lovchi sifatida ham  ularga sherik bo'lishingiz mumkin",
    },
    {
      id: 3,
      title: "Zuv dasturi qanchalik ishonchli",
      desc: "Mobil ilova orqali yuklaganlaringizni, shu yo'nalishda yo'lga chiqqan transport egalari orqali berib yuborishingiz mumkin. Yo'lovchi sifatida ham  ularga sherik bo'lishingiz mumkin",
    },
    {
      id: 4,
      title: "Zuv dasturi qanchalik ishonchli",
      desc: "Mobil ilova orqali yuklaganlaringizni, shu yo'nalishda yo'lga chiqqan transport egalari orqali berib yuborishingiz mumkin. Yo'lovchi sifatida ham  ularga sherik bo'lishingiz mumkin",
    },
  ];

  return (
    <section className="main-faq">
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

            <div className="faq__content-question">
              <h5 className="question_left-title">Yana savollar qoldimi?</h5>

              <h3 className="question_send-title">Biz javob beramiz!</h3>

              <div className="question_input">
                <input type="text" placeholder="telefon raqam" />
              </div>

              <div className="question_textarea">
                <textarea
                  cols="10"
                  rows="5"
                  className=""
                  placeholder="savol"
                ></textarea>
              </div>
              <div className="question_btn">
                <button>Jo'natish</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faq;

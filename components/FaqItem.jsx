import React, { useState, useRef } from "react";

function FaqItem({ item }) {
  const [active, setActive] = useState(false);
  const accordionItem = useRef(null);
  const view = useRef(null);

  const openAccordion = () => {
    if (accordionItem.current.classList.contains("open")) {
      accordionItem.current.classList.remove("open");
      setActive(false);
      view.current.style.maxHeight = "0px";
    } else {
      accordionItem.current.classList.add("open");
      setActive(true);
      view.current.style.maxHeight = view.current.scrollHeight + "px";
    }
  };
  
  return (
    <li
      className="accordion__item"
      key={item.id}
      ref={accordionItem}
      onClick={() => openAccordion()}
    >
      <div className="accordion__item-title">
        <p className="main_title">{item.title}</p>
        <span className="main_icon">{active === false ? "+" : "-"}</span>
      </div>
      <div className="accordion__item-desc" ref={view}>
        <p className="main_desc">{item.desc}</p>
      </div>
    </li>
  );
}

export default FaqItem;

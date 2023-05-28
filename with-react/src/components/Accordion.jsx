import React, { useState } from "react";
import "../styles/Accordion.css";

const Accordion = ({ data }) => {
  const [selected, setSelected] = useState(0);

  const toggle = (i) => {
    // if (selected === i) {
    //   return setSelected(null);
    // }

    setSelected(i);
  };

  //   console.log(selected === 0);

  return (
    <div>
      {data.map((item, i) => (
        <div className="accordionContainer">
          <div className="accordionTitleContainer" onClick={() => toggle(i)}>
            <h1>{item.title}</h1>
            <span>{selected === i ? "-" : "+"}</span>
          </div>
          <div
            className={
              selected === i ? "accordionContent show" : "accordionContent"
            }
          >
            {item.lessons.map((lesson, i) => (
              <div className="flex flex-col lesson">
                <div className="lessonThumb"></div>
                <p className="lessonTitle">{lesson.title}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;

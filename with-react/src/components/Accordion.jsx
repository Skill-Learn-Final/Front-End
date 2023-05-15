import React, { useState } from "react";
import "../styles/Accordion.css";
const data = [
  {
    title: "something1",
    description:
      "some description here Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam nulla vel voluptatibus accusantium reiciendis praesentium corrupti ab amet autem numquam.",
  },
  {
    title: "something2",
    description:
      "some description here Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam nulla vel voluptatibus accusantium reiciendis praesentium corrupti ab amet autem numquam.",
  },
  {
    title: "something3",
    description:
      "some description here Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam nulla vel voluptatibus accusantium reiciendis praesentium corrupti ab amet autem numquam.",
  },
  {
    title: "something4",
    description:
      "some description here Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam nulla vel voluptatibus accusantium reiciendis praesentium corrupti ab amet autem numquam.",
  },
  {
    title: "something5",
    description:
      "some description here Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam nulla vel voluptatibus accusantium reiciendis praesentium corrupti ab amet autem numquam.",
  },
  {
    title: "something6",
    description:
      "some description here Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam nulla vel voluptatibus accusantium reiciendis praesentium corrupti ab amet autem numquam.",
  },
];

const Accordion = () => {
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
          <p
            className={
              selected === i ? "accordionContent show" : "accordionContent"
            }
          >
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Accordion;

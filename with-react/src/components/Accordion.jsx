import React, { useState } from "react";
import "../styles/Accordion.css";
const data = [
  {
    title: "Chapter 1",
    lessons: [
      {
        title: "Lesson 1",
        thumbnail: "someDir",
      },
      { title: "Lesson 2", thumbnail: "someDir" },
      { title: "Lesson 3", thumbnail: "someDir" },
    ],
  },
  {
    title: "Chapter 2",
    lessons: [
      { title: "Lesson 4", thumbnail: "someDir" },
      { title: "Lesson 5", thumbnail: "someDir" },
      { title: "Lesson 6", thumbnail: "someDir" },
    ],
  },
  {
    title: "Chapter 3",
    lessons: [
      { title: "Lesson 7", thumbnail: "someDir" },
      { title: "Lesson 8", thumbnail: "someDir" },
      { title: "Lesson 9", thumbnail: "someDir" },
    ],
  },
  {
    title: "Chapter 4",
    lessons: [
      { title: "Lesson 10", thumbnail: "someDir" },
      { title: "Lesson 11", thumbnail: "someDir" },
      { title: "Lesson 12", thumbnail: "someDir" },
    ],
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

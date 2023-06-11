import React, { useState } from "react";

import { Column, Row, Text, Button } from "components";

import Accordion from "components/Accordion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faPlay } from "@fortawesome/free-solid-svg-icons";
import ReactPlayer from "react-player";

const courseData = [
  {
    title: "Chapter 1",
    lessons: [
      { title: "Intro", thumbnail: "images/student.jpg", duration: 10 },
      { title: "Lesson 2", thumbnail: "images/teacher.jpg", duration: 10 },
      { title: "Lesson 3", thumbnail: "images/teacher.jpg", duration: 10 },
    ],
  },
  {
    title: "Chapter 2",
    lessons: [
      { title: "Lesson 4", thumbnail: "images/teacher.jpg", duration: 10 },
      { title: "Lesson 5", thumbnail: "images/teacher.jpg", duration: 10 },
      { title: "Lesson 6", thumbnail: "images/student.jpg", duration: 10 },
    ],
  },
  {
    title: "Chapter 3",
    lessons: [
      { title: "Lesson 7", thumbnail: "images/teacher.jpg", duration: 10 },
      { title: "Lesson 8", thumbnail: "images/teacher.jpg", duration: 10 },
      { title: "Lesson 9", thumbnail: "images/teacher.jpg", duration: 10 },
    ],
  },
  {
    title: "Chapter 4",
    lessons: [
      { title: "Lesson 10", thumbnail: "images/student.jpg", duration: 10 },
      { title: "Lesson 11", thumbnail: "images/teacher.jpg", duration: 10 },
      { title: "Lesson 12", thumbnail: "images/student.jpg", duration: 10 },
    ],
  },
];

const VideoSection = () => {
  const [selectedChapter, setSelectedChapter] = useState(0);
  const [selectedLesson, setSelectedLesson] = useState(0);

  return (
    <Row className="bg-white shadow-lg flex flex-row md:flex-wrap sm:flex-wrap items-start max-w-[auto] ml-[auto] mr-[auto] sm:mx-[0] sm:p-[15px] md:p-[17px] p-[25px] sm:pl-[15px] sm:pr-[15px] rounded-radius20 w-[90%]">
      <Column className="flex flex-col justify-start md:ml-[3px] ml-[5px] sm:mx-[0] my-[4px] sm:px-[0] sm:w-[100%] w-[63%]">
        <Column className="flex flex-col justify-start sm:mt-[15px] md:mt-[20px] mt-[30px] w-[100%]">
          {/* <Column
            className="bg-cover bg-no-repeat flex flex-col items-center justify-start md:p-[135px] sm:p-[15px] p-[197px] rounded-radius20 w-[100%]"
            style={{
              backgroundImage: `url(/${courseData[selectedChapter].lessons[selectedLesson].thumbnail})`,
            }}
          >
            <Button
              className="flex sm:h-[32px] md:h-[42px] h-[60px] items-center justify-center mb-[1px] rounded-radius50 sm:w-[31px] md:w-[41px] w-[60px]"
              size="2xlIcn"
              variant="icbFillRed300"
            >
              <FontAwesomeIcon
                // src="images/img_play.svg"
                icon={
                  selectedChapter === 0 && selectedLesson === 0
                    ? faPlay
                    : faLock
                }
                className="h-[16px] sm:h-[9px] md:h-[12px] flex items-center justify-center"
                // alt="play"
              />
            </Button>
          </Column> */}
          <ReactPlayer
            controls={true}
            url="http://localhost:8080/uploads/video.mp4"
          />
          <Text
            className="sm:mt-[15px] md:mt-[19px] mt-[29px] text-black_900 w-[auto]"
            as="h5"
            variant="h5"
          >
            {courseData[selectedChapter].lessons[selectedLesson].title} |
            {courseData[selectedChapter].lessons[selectedLesson].duration} mins
          </Text>
        </Column>
      </Column>
      <Column className="flex flex-col justify-start md:ml-[46px] ml-[68px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[32%]">
        <Text className="text-black_900 w-[auto]" as="h5" variant="h5">
          Course Title
        </Text>

        <Column
          style={{ backgroundColor: "#3330", minHeight: "500px" }}
          className="flex flex-col items-center justify-start md:mt-[10px] mt-[15px] sm:mt-[7px] p-[1rem] w-[100%]"
        >
          <div>
            {courseData.map((item, i) => (
              <div className="accordionContainer">
                <div
                  className="accordionTitleContainer"
                  onClick={() => {
                    setSelectedChapter(i);
                    setSelectedLesson(0);
                  }}
                >
                  <h1>{item.title}</h1>
                  <span>{selectedChapter === i ? "-" : "+"}</span>
                </div>
                <div
                  className={
                    selectedChapter === i
                      ? "accordionContent show"
                      : "accordionContent"
                  }
                >
                  {item.lessons.map((lesson, i) => (
                    <div
                      className="flex flex-col lesson"
                      onClick={() => setSelectedLesson(i)}
                    >
                      <div
                        className="lessonThumb"
                        style={{
                          backgroundImage: `url(/${lesson.thumbnail})`,
                          backgroundSize: "cover",
                        }}
                      ></div>
                      <p className="text-md lessonTitle">{lesson.title}</p>
                      <p className="text-sm text-gray_600">
                        {lesson.duration} mins
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Column>
      </Column>
    </Row>
  );
};

export default VideoSection;
